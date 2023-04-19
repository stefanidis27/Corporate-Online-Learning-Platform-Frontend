import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public strInfo: string;
  strUsrLogin: string;
  strUsrPwd: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strUsrLogin = "";
    this.strUsrPwd = "";

    this.GetLoginSave();
  }

  public DoLogin() {
    if (this.validateEmail(this.strUsrLogin.trim()) == false) {
      this.presentAlarm();
    } else if (this.strUsrLogin.trim().length != 0
      && this.strUsrPwd.length != 0) {
      this.http.post<any>(this.srvMain.strWSPath + 'auth/authenticate',
        { 
          email: this.strUsrLogin.trim(), 
          password: this.strUsrPwd 
        }).subscribe(data => {
            this.srvMain.IdUser = data.id;
            this.srvMain.Role = data.role;
            this.srvMain.Token = data.token;
            this.SaveLogin();
  
            setTimeout(() => {
              if (this.srvMain.Role === "HR_REP") {
                this.router.navigate(['/personalinfohr']);
              } else if (this.srvMain.Role === "TRAINER") {
                this.router.navigate(['/personalinfotrainer']);
              } else if (this.srvMain.Role === "ADMIN") {
                this.router.navigate(['/personalinfoadmin']);
              } else {
                this.router.navigate(['/to-do-list']);
              }
            }, 300);
        },
        error => {
          if (error.status === 403) {
            this.presentAlert("Incorrect password!");
          } else if (error.status === 404) {
            this.presentAlert("A user with this email does not exist. To create an account, please email an HR representative.");
          } else if (error.status === 401) {
            this.presentAlert("Account is currently locked for 15 minutes. Please try again later.");
          }
        });    
    } else {
      this.presentAlert('Please enter both the email and the password.');
    }
  }

  validateEmail(email: string): boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  async presentAlarm() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a valid email.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  SaveLogin() {
    localStorage.setItem('Login', this.strUsrLogin.trim());
    localStorage.setItem('token', this.strUsrPwd);
  }
  
  GetLoginSave() {
    this.strUsrLogin = "";
    this.strUsrPwd = "";

    if (localStorage.getItem('Login') != null) {
      this.strUsrLogin = localStorage.getItem('Login');
      this.strUsrPwd = localStorage.getItem('token');
    }
  }
}
