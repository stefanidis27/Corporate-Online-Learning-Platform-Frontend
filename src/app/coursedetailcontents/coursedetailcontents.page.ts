import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursedetailcontents',
  templateUrl: './coursedetailcontents.page.html',
  styleUrls: ['./coursedetailcontents.page.scss'],
})
export class CoursedetailcontentsPage {

  public items = [];
  courseName: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.courseName = this.srvMain.selectedCourseName;
    this.GetCourseContentsToTrainee();
  }

  GetCourseContentsToTrainee() {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString() +
      '/get-course-contents/' + this.srvMain.IdCourse.toString() + '/on-page/0',
      { headers }
    ).subscribe(data => {
      if (data.length != 0) {
        for (var i in data) {
          let firstButtonDisabled = null;
          let status = "";
          let comment = "";

          if ((data[i].needsGrading == true && data[i].status == true)
            || (data[i].needsGrading == false && data[i].status == true)) {
              status = "Completed assignment";
              firstButtonDisabled = true;
          } else if (data[i].needsGrading == false && data[i].status == false) {
            status = "";
          } else if (data[i].needsGrading == true && data[i].status == false
              && data[i].comment != null) {
            status = "Incorrect answer";
            firstButtonDisabled = true;
            comment = data[i].comment;
          } else {
            status = "Assignment not yet graded by the teacher";
            firstButtonDisabled = true;
          }

          this.items.push({
            text: data[i].text,
            firstButtonDisabled: firstButtonDisabled,
            comment: comment,
            status: status,
            id: data[i].id
          });
        }
      } else {
        this.presentAlarm("You need to be enrolled in this course in order to see its contents.");
      }
    });
  }

  async presentAlarm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  FirstButtonClick(item: any) {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'trainee/complete-assignment/' + item.id,
      { },
      { headers }
    ).subscribe(data => {});

    setTimeout(() => {
      this.GetCourseContentsToTrainee();
    }, 300);
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
