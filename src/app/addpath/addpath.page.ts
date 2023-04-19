import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpath',
  templateUrl: './addpath.page.html',
  styleUrls: ['./addpath.page.scss'],
})
export class AddpathPage {

  public items = [];
  public courses = [];
  strNameForm: string;
  strCategoryForm: string;
  queryParam: string;
  sortMode: string;
  sortBy: string;
  strNameEditForm: string;
  strCategoryEditForm: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.strNameEditForm = "";
    this.strCategoryEditForm = "";
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc"
    
    this.courses = [];
    this.GetAllCourses();
  }

  GetAllCourses() {
    this.items = [];
    this.prepareQueryParams();

    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/' + this.srvMain.IdUser
        + '/get-courses-path/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(data[i]);
      }
    });
  }

  private prepareQueryParams() {
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;

    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }
  }

  changeSortMode() {}

  changeSortBy() {}

  FirstButtonClick(item: any) {
    if (this.checkCourseAlreadyAdded(item.id)) {
      this.presentAlarm("This course was already added.");
    } else {
      this.courses.push(
        {
          name: item.name,
          id: item.id
        }
      )
    }
  }

  checkCourseAlreadyAdded(id: number): boolean {
    for (var i in this.courses) {
      if (this.courses[i].id == id) {
        return true;
      }
    }
    return false;
  }

  SecondButtonClick(course: any) {
    const index = this.courses.indexOf(course, 0);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

  CreatePath() {
    if (this.strNameEditForm.trim().length != 0
        && this.strCategoryEditForm.trim().length != 0
        && this.courses.length != 0) {
      const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
      let courseIds = [];
      for (var i in this.courses) {
        courseIds.push(this.courses[i].id);
      }
  
      this.http.post<any>(
        this.srvMain.strWSPath + 'trainer/' + this.srvMain.IdUser.toString()
          + '/create-path',
        { 
          name: this.strNameEditForm.trim(),
          category: this.strCategoryEditForm.trim(),
          courseIds: courseIds
        },
        { headers }
      ).subscribe(
        data => {
          setTimeout(() => {
            this.router.navigate(['/searchpathstrainer']);
          }, 300);
        },
        error => {
          if (error.status === 400) {
            this.presentAlarm("A path with this name already exists. Please choose another name.");
          }
        });
    } else {
      this.presentAlarm("Please choose a name, a password and at least one course for the new path.");
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
