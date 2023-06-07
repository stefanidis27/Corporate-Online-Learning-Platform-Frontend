import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportcreatetrainee',
  templateUrl: './reportcreatetrainee.page.html',
  styleUrls: ['./reportcreatetrainee.page.scss'],
})
export class ReportcreatetraineePage {

  public items = [];
  data: string;
  queryParam: string;
  strNameForm: string;
  strEmailForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strEnroledForm: string;
  strLowestPrForm: string;
  strHighestPrForm: string;
  strEarliestDateForm: string;
  strLatestDateForm: string;
  selectedBeforeDate: string;
  selectedAfterDate: string;
  strEnroledPathForm: string;
  strLowestPrPathForm: string;
  strHighestPrPathForm: string;

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
    this.strEnroledForm = "";
    this.strLowestPrForm = "";
    this.strHighestPrForm = "";
    this.strEarliestDateForm = "";
    this.strLatestDateForm = "";
    this.strEnroledPathForm = "";
    this.strLowestPrPathForm = "";
    this.strHighestPrPathForm = "";

    this.GetTraineesReport();
  }

  GetTraineesReport() {
    this.items = [];
    this.prepareQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-trainees-report/0?'+ this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let progressLevel = "";
        if (data[i].progressLevel != null) {
          progressLevel = data[i].progressLevel.toString() + '%';
        }
        let pathProgressLevel = "";
        if (data[i].pathProgressLevel != null) {
          pathProgressLevel = data[i].pathProgressLevel.toString() + '%';
        }

        this.items.push({
          name: data[i].name,
          email: data[i].email,
          department: data[i].department == null ? "-" : data[i].department,
          seniority: data[i].seniority == null ? "-" : data[i].seniority,
          position: data[i].position == null ? "-" : data[i].position,
          progressLevel: progressLevel,
          enrollmentDate: data[i].enrollmentDate,
          pathProgressLevel: pathProgressLevel
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
    if (this.strEnroledForm.trim().length != 0) {
      this.queryParam += "&course=" + this.strEnroledForm.trim();
    }
    if (this.strLowestPrForm.trim().length != 0) {
      this.queryParam += "&progressLevelLow=" + this.strLowestPrForm.trim();
    }
    if (this.strHighestPrForm.trim().length != 0) {
      this.queryParam += "&progressLevelHigh=" + this.strHighestPrForm.trim();
    }
    if (this.selectedAfterDate != null) {
      const strEarliestDate = this.selectedAfterDate.substring(5, 7)
        + '/' + this.selectedAfterDate.substring(8, 10) + '/'
        + this.selectedAfterDate.substring(0, 4);
      this.queryParam += "&enrollmentDateEarliest=" + strEarliestDate;
    }
    if (this.selectedBeforeDate != null) {
      const strLatestDate = this.selectedBeforeDate.substring(5, 7) + '/'
        + this.selectedBeforeDate.substring(8, 10) + '/'
        + this.selectedBeforeDate.substring(0, 4);
      this.queryParam += "&enrollmentDateLatest=" + strLatestDate;
    }
    if (this.strEnroledPathForm.trim().length != 0) {
      this.queryParam += "&path=" + this.strEnroledPathForm.trim();
    }
    if (this.strLowestPrPathForm.trim().length != 0) {
      this.queryParam += "&progressPathLevelLow="
        + this.strLowestPrPathForm.trim();
    }
    if (this.strHighestPrPathForm.trim().length != 0) {
      this.queryParam += "&progressPathLevelHigh="
        + this.strHighestPrPathForm.trim();
    }
  }

  CreateReport() {
    this.presentAlert();
  }

  private SendReportRequest() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'hr/' + this.srvMain.IdUser
      + '/create-trainees-report',
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
