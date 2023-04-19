import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  strEmail: string;
  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strEmail = "";
  }

  public SendPasswordResetRequest() {
    if (this.validateEmail(this.strEmail.trim()) == false) {
      this.presentAlarm('Please enter a valid email.');
    } else if (this.strEmail.trim().length != 0) {
      this.http.post<any>(this.srvMain.strWSPath + 'auth/reset-password',
      { 
        email: this.strEmail.trim(),
      }).subscribe(data => {
        this.router.navigate(['/home']);
      }, error => {
        if (error.status === 404) {
          this.presentAlarm("A user with this email does not exist. To create an account, please email an HR representative.");
        }
      });  
    } else {
      this.presentAlertValid();
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

  async presentAlertValid() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter an email before pressing \'Send\'.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
