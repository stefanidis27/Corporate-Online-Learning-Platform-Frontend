import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcourseshr',
  templateUrl: './searchcourseshr.page.html',
  styleUrls: ['./searchcourseshr.page.scss'],
})
export class SearchcourseshrPage {

  public items = [];
  strNameForm: string;
  strCategoryForm: string;
  queryParam: string;
  sortMode: string;
  sortBy: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc";

    this.GetAllCourses();
  }

  GetAllCourses() {
    this.items = [];
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;

    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }

    this.getAllCoursesToHR();
  }

  changeSortMode() {}

  changeSortBy() {}

  private getAllCoursesToHR() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-courses/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        const enrollStatus = data[i].currentEnrollments.toString() + '/'
          + data[i].maxEnrollments.toString();

        this.items.push({
          name: data[i].name,
          enrollStatus: enrollStatus,
          noAssign: data[i].noAssignments,
          category: data[i].category,
          firstButtonDisabled: !data[i].canEnroll,
          id: data[i].id
        });
      }
    });
  }

  FirstButtonClick(item: any) {
    this.srvMain.IdCourse = item.id;
    this.srvMain.selectedCourseName = item.name;

    setTimeout(() => {
      this.router.navigate(['/enrolltrainees']);
    }, 300);
  }

  SecondButtonClick(item: any) {
    this.srvMain.IdCourse = item.id;
    this.srvMain.selectedCourseName = item.name;
    this.srvMain.editSelfEnrollCheckbox = item.firstButtonDisabled;

    setTimeout(() => {
      this.router.navigate(['/editcourse']);
    }, 300);
  }

  ThirdButtonClick(item: any) {
    this.presentAlert(item);
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Do you want to permanently delete this course? Please confirm.',
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
            this.DeleteCourse(item);
          },
        },
      ],
    });

    await alert.present();
  }

  private DeleteCourse(item: any) {
    this.srvMain.IdCourse = item.id;
    this.srvMain.selectedCourseName = item.name;
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.delete<any>(
      this.srvMain.strWSPath + 'hr/delete-course/' + item.id.toString(),
      { headers }
    ).subscribe(data => { });

    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
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
