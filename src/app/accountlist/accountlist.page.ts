import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.page.html',
  styleUrls: ['./accountlist.page.scss'],
})
export class AccountlistPage {

  public alertButtons = ['OK'];
  public items = [];
  strNameForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strEmailForm: string;
  queryParam: string;
  strNameEditForm: string;
  strDepartmentEditForm: string;
  strPositionEditForm: string;
  strSeniorityEditForm: string;
  
  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strDepartmentForm = "";
    this.strPositionForm = "";
    this.strSeniorityForm = "";
    this.strEmailForm = "";
    this.strNameEditForm = "";
    this.strDepartmentEditForm = "";
    this.strPositionEditForm = "";
    this.strSeniorityEditForm = "";

    this.GetAllAccounts();
  }

  GetAllAccounts() {
    this.queryParam = "";
    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strDepartmentForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strDepartmentForm.trim();
    }
    if (this.strSeniorityForm.trim().length != 0) {
      this.queryParam += "&seniority=" + this.strSeniorityForm.trim();
    }
    if (this.strPositionForm.trim().length != 0) {
      this.queryParam += "&position=" + this.strPositionForm.trim();
    }
    if (this.strEmailForm.trim().length != 0) {
      this.queryParam += "&email=" + this.strEmailForm.trim();
    }

    this.getAllAccountsToHR();
  }

  private getAllAccountsToHR() {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/' + this.srvMain.IdUser.toString()
        + '/get-accounts/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push({
          name: data[i].name,
          email: data[i].email,
          department: data[i].department == null ? "-" : data[i].department,
          position: data[i].position == null ? "-" : data[i].position,
          seniority: data[i].seniority == null ? "-" : data[i].seniority,
          id: data[i].id
        });
      }
    });
  }

  FirstButtonClick(item : any) {
    if (this.strNameForm.trim().length == 0
      && this.strDepartmentEditForm.trim().length == 0
      && this.strPositionEditForm.trim().length == 0
      && this.strSeniorityEditForm.trim().length == 0) {
        this.presentAlert();
    } else {
      const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

      this.http.post<any>(
        this.srvMain.strWSPath + 'hr/change-account-details/' + item.id,
        { 
          name: this.strNameEditForm.trim(),
          department: this.strDepartmentEditForm.trim(),
          position: this.strPositionEditForm.trim(),
          seniority: this.strSeniorityEditForm.trim(),
        },
        { headers }
      ).subscribe(data => {});
  
      this.strNameEditForm = "";
      this.strDepartmentEditForm = "";
      this.strPositionEditForm = "";
      this.strSeniorityEditForm = "";
  
      setTimeout(() => {
        this.getAllAccountsToHR();
      }, 300);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please change at least one user info before pressing \'Edit\'.',
      buttons: ['OK']
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
