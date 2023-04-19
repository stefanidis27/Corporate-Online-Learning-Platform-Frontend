import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountlistadmin',
  templateUrl: './accountlistadmin.page.html',
  styleUrls: ['./accountlistadmin.page.scss'],
})
export class AccountlistadminPage {

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

    this.getAllAccountsToAdmin();
  }

  private getAllAccountsToAdmin() {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'admin/' + this.srvMain.IdUser.toString()
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
    this.presentAlert(item);
  }

  private DeleteAccount(item: any) {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.delete<any>(
      this.srvMain.strWSPath + 'admin/delete-account/' + item.id,
      { headers }
    ).subscribe(data => { });

    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Do you want to permanently delete this account? Please confirm.',
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
            this.DeleteAccount(item);
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
