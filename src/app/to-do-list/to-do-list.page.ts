import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage {

  strUsrLogin: string;
  strUsrPwd: string;
  strUsrPwdConf: string;
  strName: string; 
  strDepartment: string;
  strPosition: string;
  strSeniority: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strUsrLogin = "";
    this.strUsrPwd = null;
    this.strUsrPwdConf = null;

    this.GetUserInfo();
  }

  GetUserInfo() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
    
    this.http.get<any>(
      this.srvMain.strWSPath + 'common/' + this.srvMain.IdUser.toString()
        + '/personal-info',
      {headers}
      ).subscribe(data => {
        this.strName = data.name;
        this.strDepartment = data.department.length == 0
          ? "--" : data.department;
        this.strPosition = data.position.length == 0
          ? "--" : data.position;
        this.strSeniority = data.seniority.length == 0
          ? "--" : data.seniority;
      })
  }

  ChangeUserInfo() {
    if (this.strUsrLogin.trim().length == 0 && this.strUsrPwd == null
      && this.strUsrPwdConf == null) {
      this.presentAlertEmptyFields();
    } else if (this.strUsrPwd == null
      || (this.strUsrPwd === this.strUsrPwdConf)) {
      if (this.validateEmail(this.strUsrLogin.trim()) == true) {
        this.presentAlertConfirmChanges();
      } else {
        this.presentAlertEmailValid();
      }
    } else if (this.strUsrPwd != null
      && (this.strUsrPwd != this.strUsrPwdConf)) {
        this.presentAlertPasswordMatch();
    }
  }

  async presentAlertEmailValid() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a valid email.',
      buttons: ['OK']
    });

    await alert.present();
  }

  validateEmail(email: string): boolean {
    if (email.length == 0) {
      return true;
    }

    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  async presentAlertEmptyFields() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please change at least one of the credentials before pressing \'Save\'.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirmChanges() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Your credentials will be updated. Do you wish to proceed?',
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
            this.sendCredentialsChange();
          },
        },
      ],
    });

    await alert.present();
  }
    
  private sendCredentialsChange() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'common/' + this.srvMain.IdUser.toString()
      + '/change-credentials',
      {
        email: this.strUsrLogin.trim().length == 0
          ? null : this.strUsrLogin.trim(),
        password: this.strUsrPwd == null ? null : this.strUsrPwd.trim()
      },
      { headers }
    ).subscribe(data => {
      this.srvMain.Token = data.token;
      this.strUsrLogin = "";
      this.strUsrPwd = null;
      this.strUsrPwdConf = null;
    },
    error => {
      if (error.status === 400) {
        this.presentAlertWrongEmail();
      }
    })
  }

  async presentAlertPasswordMatch() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Passwords do not match.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertWrongEmail() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'The email you entered is already in use. Please choose another email.',
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
