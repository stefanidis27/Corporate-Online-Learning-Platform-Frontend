import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage {

  public items = [];
  buttonDis1: boolean;
  buttonDis2: boolean;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.GetCoursesInProgress();
  }

  GetCoursesInProgress() {
    this.buttonDis1 = true;
    this.buttonDis2 = null;
    this.GetCoursesToTrainee("false");
  }

  GetCompletedCourses() {
    this.buttonDis1 = null;
    this.buttonDis2 = true;
    this.GetCoursesToTrainee("true");
  }

  GetCoursesToTrainee(completedCourses : string) {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
      + '/get-account-courses/0?completed=' + completedCourses,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        const assignStatus = data[i].completedAssignments.toString() + '/'
          + data[i].numberOfAssignments.toString() + " assignments";
        const progressStatus = (100 * (data[i].completedAssignments
          / data[i].numberOfAssignments)).toString() + "%";

        this.items.push({
          name: data[i].name,
          completedAssignmentsStatus: assignStatus,
          progressStatus: progressStatus,
          category: data[i].category,
          id: data[i].id
        });
      }
    });
  }

  FirstButtonClick(item: any) {
    this.srvMain.IdCourse = item.id;
    this.srvMain.selectedCourseName = item.name;

    setTimeout(() => {
      this.router.navigate(['/coursedetailinfo']);
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
