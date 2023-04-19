import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.page.html',
  styleUrls: ['./addaccount.page.scss'],
})
export class AddaccountPage {

  strNameForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strEmailForm: string;
  type: string;

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
    this.type = "TRAINEE";
  }

  changeType() {}

  CreateAccount() {
    if (this.strNameForm.trim().length != 0
      && this.strEmailForm.trim().length != 0) {
      if (this.validateEmail(this.strEmailForm.trim()) == false) {
        this.presentAlarm("Please enter a valid email.");
      } else {
        const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

        this.http.post<any>(
          this.srvMain.strWSPath + 'admin/create-account',
          { 
            name: this.strNameForm.trim(),
            department: this.strDepartmentForm.trim(),
            position: this.strPositionForm.trim(),
            seniority: this.strSeniorityForm.trim(),
            email: this.strEmailForm.trim(),
            role: this.type
          },
          { headers }
        ).subscribe(
          data => {
            setTimeout(() => {
              this.router.navigate(['/accountlistadmin']);
            }, 300);
          },
          error => {
            if (error.status === 400) {
              this.presentAlarm("An account with this email already exists. Please enter another email.");
            }
          });
      }
    } else {
      this.presentAlarm("Please enter at least a name and an email before pressing \'Create\'.");
    }
  }

  validateEmail(email: string): boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  async presentAlarm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: msg,
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
