import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportcreaterpath',
  templateUrl: './reportcreaterpath.page.html',
  styleUrls: ['./reportcreaterpath.page.scss'],
})
export class ReportcreaterpathPage {

  public items = [];
  data: string;
  queryParam: string;
  sortBy: string;
  sortMode: string;
  strNameForm: string;
  strCategoryForm: string;
  strTrainerForm: string;
  strCoursesForm: string;
  strLowestCoursesForm: string;
  strHighestCoursesForm: string;
  strLowestCompletionsForm: string;
  strHighestCompletionsForm: string;
  strLowestCurrEnrollmentsForm: string;
  strHighestCurrEnrollmentsForm: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc";
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.strTrainerForm = "";
    this.strCoursesForm = "";
    this.strLowestCoursesForm = "";
    this.strHighestCoursesForm = "";
    this.strLowestCompletionsForm = "";
    this.strHighestCompletionsForm = "";
    this.strLowestCurrEnrollmentsForm = "";
    this.strHighestCurrEnrollmentsForm = "";

    this.GetPathsReport();
  }

  changeSortBy() {}

  changeSortMode() {}

  GetPathsReport() {
    this.items = [];
    this.prepareQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-paths-report/0?'+ this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(data[i]);
      }

      this.data = data;
    });
  }

  private prepareQueryParam() {
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;
    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }
    if (this.strTrainerForm.trim().length != 0) {
      this.queryParam += "&trainer=" + this.strTrainerForm.trim();
    }
    if (this.strCoursesForm.trim().length != 0) {
      this.queryParam += "&courses=" + this.strCoursesForm.trim();
    }
    if (this.strLowestCoursesForm.trim().length != 0) {
      this.queryParam += "&courseNoLow=" + this.strLowestCoursesForm.trim();
    }
    if (this.strHighestCoursesForm.trim().length != 0) {
      this.queryParam += "&courseNoHigh=" + this.strHighestCoursesForm.trim();
    }
    if (this.strLowestCompletionsForm.trim().length != 0) {
      this.queryParam += "&completionsNoLow="
        + this.strLowestCompletionsForm.trim();
    }
    if (this.strHighestCompletionsForm.trim().length != 0) {
      this.queryParam += "&completionsNoHigh="
        + this.strHighestCompletionsForm.trim();
    }
    if (this.strLowestCurrEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&currentEnrollmentsNoLow="
        + this.strLowestCurrEnrollmentsForm.trim();
    }
    if (this.strHighestCurrEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&currentEnrollmentsNoHigh="
        + this.strHighestCurrEnrollmentsForm.trim();
    }
  }

  CreateReport() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'A report will be sent to you via email. Do you wish to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.sendReportRequest();
          },
        },
      ],
    });

    await alert.present();
  }

  private sendReportRequest() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'hr/' + this.srvMain.IdUser
      + '/create-paths-report',
      { reportList: this.data },
      { headers }
    ).subscribe(data => { });
  }

  btnLogOutClick() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(this.srvMain.strWSPath + 'auth/logout',
    {}, {headers}).subscribe(data => {});

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 300);
  }
}
