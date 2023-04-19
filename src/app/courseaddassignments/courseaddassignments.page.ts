import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseaddassignments',
  templateUrl: './courseaddassignments.page.html',
  styleUrls: ['./courseaddassignments.page.scss'],
})
export class CourseaddassignmentsPage {

  public items = [];
  sendItems = [];
  courseName: string;
  checkedToggle: boolean;
  hiddenConfirmButton: boolean;
  newText: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.checkedToggle = false;
    this.courseName = this.srvMain.selectedCourseName;
    this.hiddenConfirmButton = true;
    this.newText = "";
  }

  changeToggle() {
    this.checkedToggle = !this.checkedToggle;
  }

  FirstButtonClick() {
    this.presentAlertAddAssignments();
  }

  async presentAlertAddAssignments() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'The assignments will be permanently added to the selected course. Do you wish to proceed?',
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
            this.sendAssignmentsToDB();
          },
        },
      ],
    });

    await alert.present();
  }

  private sendAssignmentsToDB() {
    this.sendItems = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
    for (var i in this.items) {
      let needsGrading = false;
      if (this.items[i].needsGrading.length != 0) {
        needsGrading = true;
      }

      this.sendItems.push({
        text: this.items[i].text,
        needsGrading: needsGrading
      });
    }

    this.http.post<any>(
      this.srvMain.strWSPath + 'trainer/add-assignments-to-course/'
      + this.srvMain.IdCourse,
      {
        requestList: this.sendItems
      },
      { headers }
    ).subscribe();

    setTimeout(() => {
      this.router.navigate(['/coursedetailcontentstrainer']);
    }, 300);
  }

  SecondButtonClick(item: any) {
    if (this.newText.trim().length != 0) {
      let needsGrading = "";
      if (this.checkedToggle == true) {
        needsGrading = "Needs grading by me";
      }

      item.text = this.newText.trim();
      item.needsGrading = needsGrading;
      this.newText = "";
    } else {
      this.presentAlertEditItem();
    }
  }

  async presentAlertEditItem() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a text in order to edit the selected assignment.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ThirdButtonClick(item: any) {
    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }

    if (this.items.length == 0) {
      this.hiddenConfirmButton = true;
    }
  }

  FourthButtonClick() {
    if (this.newText.trim().length != 0) {
      let needsGrading = "";
      if (this.checkedToggle == true) {
        needsGrading = "Needs grading by me";
      }

      this.items.push({
        text: this.newText.trim(),
        needsGrading: needsGrading
      });
      this.newText = "";
      this.hiddenConfirmButton = false;
    } else {
      this.presentAlertAddItem();
    }
  }

  async presentAlertAddItem() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a text for the new assignment before pressing \'Add\'.',
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
