import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportcreatertrainer',
  templateUrl: './reportcreatertrainer.page.html',
  styleUrls: ['./reportcreatertrainer.page.scss'],
})
export class ReportcreatertrainerPage {

  public items = [];
  data: string;
  queryParam: string;
  strNameForm: string;
  strEmailForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strTeachesForm: string;
  strLowestPrForm: string;
  strHighestPrForm: string;
  strEarliestDateForm: string;
  strLatestDateForm: string;
  strCreatedForm: string;
  strLowestPathNoForm: string;
  strHighestPathNoForm: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strEmailForm = "";
    this.strDepartmentForm = "";
    this.strPositionForm = "";
    this.strSeniorityForm = "";
    this.strTeachesForm = "";
    this.strLowestPrForm = "";
    this.strHighestPrForm = "";
    this.strEarliestDateForm = "";
    this.strLatestDateForm = "";
    this.strCreatedForm = "";
    this.strLowestPathNoForm = "";
    this.strHighestPathNoForm = "";

    this.GetTrainersReport();
  }

  GetTrainersReport() {
    this.items = [];
    this.prepareQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-trainers-report/0?'+ this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(
          {
            name: data[i].name,
            email: data[i].email,
            department: (data[i].department == null
              || data[i].department.length == 0) ? "-" : data[i].department,
            position: (data[i].position == null
              || data[i].position.length == 0) ? "-" : data[i].position,
            seniority: (data[i].seniority == null
              || data[i].seniority.length == 0) ? "-" : data[i].seniority,
            noTaughtCourses: data[i].noTaughtCourses,
            noCurrentTrainees: data[i].noCurrentTrainees,
            noCreatedPaths: data[i].noCreatedPaths
          });
      }

      this.data = data;
    });
  }

  private prepareQueryParam() {
    this.queryParam = "";
    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strEmailForm.trim().length != 0) {
      this.queryParam += "&email=" + this.strEmailForm.trim();
    }
    if (this.strDepartmentForm.trim().length != 0) {
      this.queryParam += "&department=" + this.strDepartmentForm.trim();
    }
    if (this.strSeniorityForm.trim().length != 0) {
      this.queryParam += "&seniority=" + this.strSeniorityForm.trim();
    }
    if (this.strPositionForm.trim().length != 0) {
      this.queryParam += "&position=" + this.strPositionForm.trim();
    }
    if (this.strTeachesForm.trim().length != 0) {
      this.queryParam += "&courses=" + this.strTeachesForm.trim();
    }
    if (this.strLowestPrForm.trim().length != 0) {
      this.queryParam += "&currentTraineesLow=" + this.strLowestPrForm.trim();
    }
    if (this.strHighestPrForm.trim().length != 0) {
      this.queryParam += "&currentTraineesHigh=" + this.strHighestPrForm.trim();
    }
    if (this.strEarliestDateForm.trim().length != 0) {
      this.queryParam += "&currentNoCoursesLow="
        + this.strEarliestDateForm.trim();
    }
    if (this.strLatestDateForm.trim().length != 0) {
      this.queryParam += "&currentNoCoursesHigh="
        + this.strLatestDateForm.trim();
    }
    if (this.strCreatedForm.trim().length != 0) {
      this.queryParam += "&paths=" + this.strCreatedForm.trim();
    }
    if (this.strLowestPathNoForm.trim().length != 0) {
      this.queryParam += "&currentNoPathsLow="
        + this.strLowestPathNoForm.trim();
    }
    if (this.strHighestPathNoForm.trim().length != 0) {
      this.queryParam += "&currentNoPathsHigh="
        + this.strHighestPathNoForm.trim();
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
            this.SendReportRequest();
          },
        },
      ],
    });

    await alert.present();
  }

  private SendReportRequest() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'hr/' + this.srvMain.IdUser
      + '/create-trainers-report',
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
