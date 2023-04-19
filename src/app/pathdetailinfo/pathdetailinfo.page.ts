import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathdetailinfo',
  templateUrl: './pathdetailinfo.page.html',
  styleUrls: ['./pathdetailinfo.page.scss'],
})
export class PathdetailinfoPage {

  public items = [];
  strStatus: string;
  strProgress: string;
  strEnrollButton: string;
  complCourses: number;
  totalCourses: number;
  buttonDisabled: boolean;

  strName: string;
  strCategory: string;
  strTrainer: string;
  currEnroll: number;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.strCategory = "";
    this.strTrainer = "";
    this.strName = "";
    this.strStatus = "";
    this.strProgress = "";
    this.strEnrollButton = "";
    this.buttonDisabled = null;
    this.complCourses = 0;
    this.totalCourses = 0;
    this.currEnroll = 0;

    this.GetTraineePathInfo();
  }

  GetTraineePathInfo() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
    this.items = [];

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
        + '/get-path-info/' + this.srvMain.IdPath.toString(),
      {headers}
      ).subscribe(data => {
        this.GetBasicCourseInfo(data);
        this.complCourses = data.completedCourses;
        this.totalCourses = data.numberOfCourses;
        this.strProgress = (100 * (this.complCourses
          / this.totalCourses)).toString() + "%"; 

        if (data.enrollmentStatus == true) {
          if (this.strProgress === "100%") {
            this.strStatus = "Not enrolled";
            this.buttonDisabled = true;
            this.strEnrollButton = "You have completed this path"
          } else {
            this.strStatus = "Enrolled";
            this.strEnrollButton = "Unenroll"
          }
        } else {
          this.strStatus = "Not enrolled";
          this.strEnrollButton = "Enroll"
        }

        for (var i in data.courses) {
          let assignStatus = "";
          let progressStatus = "";
  
          if (data.courses[i].enrolmentStatus == true) {
            assignStatus = data.courses[i].completedAssignments.toString() + '/'
              + data.courses[i].numberOfAssignments.toString() + " assignments";
            progressStatus = (100 * (data.courses[i].completedAssignments
              / data.courses[i].numberOfAssignments)).toString() + "%";
          }

          this.items.push({
            name: data.courses[i].name,
            completedAssignmentsStatus: assignStatus,
            progressStatus: progressStatus,
            category: data.courses[i].category,
            id: data.courses[i].id
          });
        }
      });
  }

  FirstButtonClick(item: any) {
    this.srvMain.IdCourse = item.id;

    setTimeout(() => {
      this.router.navigate(['/coursedetailinfo']);
    }, 300);
  }

  EnrollOrUnEnrollUser() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    if (this.strStatus === "Not enrolled") {
      this.http.post<any>(
        this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
          + '/enroll-in-a-path/' + this.srvMain.IdPath.toString(),
        {},
        {headers}
      ).subscribe(data => {});
    } else {
      this.http.post<any>(
        this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
          + '/un-enroll-from-a-path/' + this.srvMain.IdPath.toString(),
        {},
        {headers}
      ).subscribe(data => {});
    }

    setTimeout(() => {
      this.GetTraineePathInfo();
    }, 200);
  }

  private GetBasicCourseInfo(data: any) {
    this.strName = data.name;
    this.strCategory = data.category;
    this.currEnroll = data.currentEnrollments;
    this.strTrainer = data.trainer;
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
