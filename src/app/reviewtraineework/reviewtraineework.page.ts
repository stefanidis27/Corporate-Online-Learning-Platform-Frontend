import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewtraineework',
  templateUrl: './reviewtraineework.page.html',
  styleUrls: ['./reviewtraineework.page.scss'],
})
export class ReviewtraineeworkPage {

  public items = [];
  courseName: string;
  buttonTraineeNameLabel: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.courseName = this.srvMain.selectedCourseName;
    this.buttonTraineeNameLabel = "Review " + this.srvMain.NameTraineeToReview
      + "'s work";

    this.GetTraineeAssignmentsToTrainer();
  }

  GetTraineeAssignmentsToTrainer() {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/get-trainee-assignments/'
        + this.srvMain.IdTraineeToReview.toString() + '/for-course/'
        + this.srvMain.IdCourse + '/on-page/0',
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let comment = "";
        if (data[i].comment != null) {
          comment = data[i].comment;
        }

        this.items.push({
          text: data[i].text,
          id: data[i].id,
          comment: comment,
          newComment: ""
        });
      }
    });
  }

  FirstButtonClick(item: any) {
    if (item.newComment.trim().length != 0) {
      const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

      this.http.post<any>(
        this.srvMain.strWSPath + 'trainer/reject-assignment/' + item.id,
        { comment: this.srvMain.teacherName + ": " + item.newComment.trim() },
        { headers }
      ).subscribe(data => {});

      item.newComment = "";
      setTimeout(() => {
        this.GetTraineeAssignmentsToTrainer();
      }, 300);
    } else {
      this.presentAlertSendComment();
    }
  }

  async presentAlertSendComment() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a comment before pressing \'Send Comment\'.',
      buttons: ['OK']
    });

    await alert.present();
  }

  SecondButtonClick(item: any) {
    this.presentAlertApprove(item);
  }

  private sendApproveAssignment(item: any) {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(
      this.srvMain.strWSPath + 'trainer/approve-assignment/' + item.id,
      {},
      { headers }
    ).subscribe(data => { });

    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  async presentAlertApprove(item: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'The selected assignment will be permanently approved. Do you wish to proceed?',
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
            this.sendApproveAssignment(item);
          },
        },
      ],
    });

    await alert.present();
  }

  ThirdButtonClick() {
    setTimeout(() => {
      this.router.navigate(['/coursedetailenrollmentstrainer']);
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
