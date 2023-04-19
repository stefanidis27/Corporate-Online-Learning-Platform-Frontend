import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.page.html',
  styleUrls: ['./editcourse.page.scss'],
})
export class EditcoursePage {

  strNameEditForm: string;
  strCategoryEditForm: string;
  strMaxEnrollmentsEditForm: string;
  strDescriptionEditForm: string;
  checkedToggle: boolean;
  courseName: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameEditForm = "";
    this.strCategoryEditForm = "";
    this.strMaxEnrollmentsEditForm = "";
    this.strDescriptionEditForm = "";
    this.checkedToggle = false;
    this.courseName = this.srvMain.selectedCourseName;
  }

  changeToggle() {
    this.checkedToggle = !this.checkedToggle;
  }

  EditCourse() {
    if (this.strNameEditForm.trim() === this.courseName) {
      this.presentAlert("Please choose a different name as a new name for this course.");
    } else if (this.strNameEditForm.trim().length == 0
      && this.strCategoryEditForm.trim().length == 0
      && this.strMaxEnrollmentsEditForm.trim().length == 0
      && this.strDescriptionEditForm.trim().length == 0) {
      this.presentAlertSelfEnroll();
    } else if (this.strMaxEnrollmentsEditForm.trim().length != 0
      && Number(this.strMaxEnrollmentsEditForm.trim()) <= 0) {
      this.presentAlert("Please enter a value greater than 0 for the number of maximum enrollments.");
    } else {
      this.sendEditCourse();
    }
  }

  private sendEditCourse() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
    let maxEnrollments = Number(this.strMaxEnrollmentsEditForm.trim());
    if (maxEnrollments == 0) {
      maxEnrollments = null;
    }

    this.http.post<any>(
      this.srvMain.strWSPath + 'hr/edit-course/' + this.srvMain.IdCourse,
      {
        name: this.strNameEditForm.trim().length == 0
          ? null : this.strNameEditForm.trim(),
        category: this.strCategoryEditForm.trim().length == 0
          ? null : this.strCategoryEditForm.trim(),
        maxEnrollments: maxEnrollments,
        selfEnrollment: this.checkedToggle,
        description: this.strDescriptionEditForm.trim().length == 0
          ? null : this.strDescriptionEditForm.trim()
      },
      { headers }
    ).subscribe(
      data => {
        setTimeout(() => {
          this.router.navigate(['/searchcourseshr']);
        }, 300);
      },
      error => {
        if (error.status === 400) {
          this.presentAlert("A course with this name already exists. Please choose another name.");
        }
      });
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertSelfEnroll() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'The self enrollment option of the selected course will be changed. Do you wish to proceed?',
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
            this.sendEditCourse();
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
