import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportcreatercourse',
  templateUrl: './reportcreatercourse.page.html',
  styleUrls: ['./reportcreatercourse.page.scss'],
})
export class ReportcreatercoursePage {

  public items = [];
  data: string;
  queryParam: string;
  sortBy: string;
  sortMode: string;
  selfEnrollment: string;
  strNameForm: string;
  strCategoryForm: string;
  strTrainersForm: string;
  strPathsForm: string;
  strLowestAssignForm: string;
  strHighestAssignForm: string;
  strLowestCompletionsForm: string;
  strHighestCompletionsForm: string;
  strLowestUnEnrollmentsForm: string;
  strHighestUnEnrollmentsForm: string;
  strLowestCurrEnrollmentsForm: string;
  strHighestCurrEnrollmentsForm: string;
  strLowestMaxEnrollmentsForm: string;
  strHighestMaxEnrollmentsForm: string;
  strLowestComplRateForm: string;
  strHighestComplRateForm: string;
  strLowestDropRateForm: string;
  strHighestDropRateForm: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc";
    this.selfEnrollment = "any";
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.strTrainersForm = "";
    this.strPathsForm = "";
    this.strLowestAssignForm = "";
    this.strHighestAssignForm = "";
    this.strLowestCompletionsForm = "";
    this.strHighestCompletionsForm = "";
    this.strLowestUnEnrollmentsForm = "";
    this.strHighestUnEnrollmentsForm = "";
    this.strLowestCurrEnrollmentsForm = "";
    this.strHighestCurrEnrollmentsForm = "";
    this.strLowestMaxEnrollmentsForm = "";
    this.strHighestMaxEnrollmentsForm = "";
    this.strLowestComplRateForm = "";
    this.strHighestComplRateForm = "";
    this.strLowestDropRateForm = "";
    this.strHighestDropRateForm = "";

    this.GetCoursesReport();
  }

  changeSelfEnrollment() {}

  changeSortBy() {}

  changeSortMode() {}

  GetCoursesReport() {
    this.items = [];
    this.prepareQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-courses-report/0?'+ this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(
          {
            name: data[i].name,
            noAssignments: data[i].noAssignments,
            currentEnrollments: data[i].currentEnrollments,
            maxEnrollments: data[i].maxEnrollments,
            category: data[i].category,
            completions: data[i].completions,
            completionRate: data[i].completionRate.toString() + '%',
            unEnrollments: data[i].unEnrollments,
            dropOutRate: data[i].dropOutRate.toString() + '%',
            selfEnrollment: data[i].selfEnrollment,
          }
        );
      }

      this.data = data;
    });
  }

  private prepareQueryParam() {
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode
      + "&selfEnrollment=" + this.selfEnrollment;
    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }
    if (this.strTrainersForm.trim().length != 0) {
      this.queryParam += "&trainers=" + this.strTrainersForm.trim();
    }
    if (this.strPathsForm.trim().length != 0) {
      this.queryParam += "&paths=" + this.strPathsForm.trim();
    }
    if (this.strLowestAssignForm.trim().length != 0) {
      this.queryParam += "&assignmentsNoLow=" + this.strLowestAssignForm.trim();
    }
    if (this.strHighestAssignForm.trim().length != 0) {
      this.queryParam += "&assignmentsNoHigh="
        + this.strHighestAssignForm.trim();
    }
    if (this.strLowestCompletionsForm.trim().length != 0) {
      this.queryParam += "&completionsNoLow="
        + this.strLowestCompletionsForm.trim();
    }
    if (this.strHighestCompletionsForm.trim().length != 0) {
      this.queryParam += "&completionsNoHigh="
        + this.strHighestCompletionsForm.trim();
    }
    if (this.strLowestUnEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&unEnrollmentsNoLow="
        + this.strLowestUnEnrollmentsForm.trim();
    }
    if (this.strHighestUnEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&unEnrollmentsNoHigh="
        + this.strHighestUnEnrollmentsForm.trim();
    }
    if (this.strLowestCurrEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&currentEnrollmentsNoLow="
        + this.strLowestCurrEnrollmentsForm.trim();
    }
    if (this.strHighestCurrEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&currentEnrollmentsNoHigh="
        + this.strHighestCurrEnrollmentsForm.trim();
    }
    if (this.strLowestMaxEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&possibleEnrollmentsNoLow="
        + this.strLowestMaxEnrollmentsForm.trim();
    }
    if (this.strHighestMaxEnrollmentsForm.trim().length != 0) {
      this.queryParam += "&possibleEnrollmentsNoHigh="
        + this.strHighestMaxEnrollmentsForm.trim();
    }
    if (this.strLowestComplRateForm.trim().length != 0) {
      this.queryParam += "&completionRateLow="
        + this.strLowestComplRateForm.trim();
    }
    if (this.strHighestComplRateForm.trim().length != 0) {
      this.queryParam += "&completionRateHigh="
        + this.strHighestComplRateForm.trim();
    }
    if (this.strLowestDropRateForm.trim().length != 0) {
      this.queryParam += "&dropOutRateLow=" + this.strLowestDropRateForm.trim();
    }
    if (this.strHighestDropRateForm.trim().length != 0) {
      this.queryParam += "&dropOutRateHigh="
        + this.strHighestDropRateForm.trim();
    }
  }

  CreateReport() {
    this.presentAlert();
  }

  private SendReportRequest() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'hr/' + this.srvMain.IdUser
      + '/create-courses-report',
      { reportList: this.data },
      { headers }
    ).subscribe(data => { });
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
            this.SendReportRequest();
          },
        },
      ],
    });

    await alert.present();
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
