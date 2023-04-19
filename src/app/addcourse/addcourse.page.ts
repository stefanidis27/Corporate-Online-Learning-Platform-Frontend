import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
})
export class AddcoursePage {

  public items = [];
  public trainers = [];
  strNameForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strEmailForm: string;
  queryParam: string;
  checkedToggle: boolean;
  strNameEditForm: string;
  strCategoryEditForm: string;
  strMaxEnrollmentsEditForm: string;

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
    this.strCategoryEditForm = "";
    this.strMaxEnrollmentsEditForm = "";
    
    this.trainers = [];
    this.checkedToggle = false;
    this.GetAllTrainers();
  }

  changeToggle() {
    this.checkedToggle = !this.checkedToggle;
  }

  GetAllTrainers() {
    this.items = [];
    this.prepareQueryParams();

    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-trainers/0' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(data[i]);
      }
    });
  }

  private prepareQueryParams() {
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
  }

  FirstButtonClick(item: any) {
    if (this.checkTrainerAlreadyAdded(item.id)) {
      this.presentAlarm("This trainer was already added.");
    } else {
      this.trainers.push(
        {
          name: item.name,
          email: item.email,
          id: item.id
        }
      )
    }
  }

  checkTrainerAlreadyAdded(id: number): boolean {
    for (var i in this.trainers) {
      if (this.trainers[i].id == id) {
        return true;
      }
    }
    return false;
  }

  SecondButtonClick(trainer: any) {
    const index = this.trainers.indexOf(trainer, 0);
    if (index > -1) {
      this.trainers.splice(index, 1);
    }
  }

  CreateCourse() {
    if (this.strMaxEnrollmentsEditForm.trim().length != 0
      && Number(this.strMaxEnrollmentsEditForm.trim()) <= 0) {
        this.presentAlarm("Please enter a value greater than 0 for the number of maximum enrollments.");
    } else if (this.strNameEditForm.trim().length != 0
        && this.strMaxEnrollmentsEditForm.trim().length != 0
        && this.strCategoryEditForm.trim().length != 0
        && this.trainers.length != 0) {
      const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
      let trainerIds = [];
      for (var i in this.trainers) {
        trainerIds.push(this.trainers[i].id);
      }
  
      this.http.post<any>(
        this.srvMain.strWSPath + 'hr/create-course',
        { 
          name: this.strNameEditForm.trim(),
          category: this.strCategoryEditForm.trim(),
          maxEnrollments: Number(this.strMaxEnrollmentsEditForm.trim()),
          selfEnrollment: this.checkedToggle,
          trainerIds: trainerIds
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
            this.presentAlarm("A course with this name already exists. Please choose another name.");
          }
        });
    } else {
      this.presentAlarm("Please complete all the fields and choose at least one trainer before pressing \'Create\'.");
    }
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
