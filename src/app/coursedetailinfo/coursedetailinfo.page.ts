import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursedetailinfo',
  templateUrl: './coursedetailinfo.page.html',
  styleUrls: ['./coursedetailinfo.page.scss'],
})
export class CoursedetailinfoPage {

  strCategory: string;
  strDescription: string;
  strTrainers: string;
  strName: string;
  currEnroll: number;
  maxEnroll: number;

  strStatus: string;
  strProgress: string;
  strDate: string;
  strEnrollButton: string;
  complAssign: number;
  totalAssign: number;
  buttonDisabled: boolean;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.strCategory = "";
    this.strDescription = "";
    this.strTrainers = "";
    this.strName = "";
    this.strStatus = "";
    this.strProgress = "";
    this.strDate = "";
    this.strEnrollButton = "";
    this.buttonDisabled = null;
    this.complAssign = 0;
    this.totalAssign = 0;
    this.currEnroll = 0;
    this.maxEnroll = 0;

    this.GetTraineeCourseInfo();
  }

  GetTraineeCourseInfo() {
    this.strTrainers = "";
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
        + '/get-course-info/' + this.srvMain.IdCourse.toString(),
      {headers}
      ).subscribe(data => {
        this.GetBasicCourseInfo(data);
        this.complAssign = data.completedAssignments;
        this.totalAssign = data.numberOfAssignments;
        this.strProgress = (100 * (this.complAssign
          / this.totalAssign)).toString() + "%"; 

        if (data.enrollmentAction === "COURSE_COMPLETED") {
          this.strStatus = "Not enrolled";
          this.strDate = "";
          this.buttonDisabled = true;
          this.strEnrollButton = "You have completed this course"
        } else if (data.enrollmentAction === "SELF_ENROLLMENT_NOT_ALLOWED") {
          this.getStatus(data);
          this.strDate = "";
          this.buttonDisabled = true;
          this.strEnrollButton = "Can't self enroll"
        } else if (data.enrollmentAction === "MAX_ENROLLMENTS_REACHED") {
          this.getStatus(data);
          this.strDate = "";
          this.buttonDisabled = true;
          this.strEnrollButton = "Max number of enrollments reached"
        } else if (data.enrollmentAction === "ENROLLMENT_ALLOWED") {
          this.getStatus(data);
          this.strDate = "";
          this.buttonDisabled = null;
          this.strEnrollButton = "Enroll"
        } else {
          this.getStatus(data);
          this.strDate = data.enrollmentDate;
          this.buttonDisabled = null;
          this.strEnrollButton = "Unenroll"
        }
      });
  }

  EnrollOrUnEnrollUser() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    if (this.strStatus === "Not enrolled") {
      this.http.post<any>(
        this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
          + '/enroll-in-a-course/' + this.srvMain.IdCourse.toString(),
        {},
        {headers}
      ).subscribe(data => {});
    } else {
      this.http.post<any>(
        this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
          + '/un-enroll-from-a-course/' + this.srvMain.IdCourse.toString(),
        {},
        {headers}
      ).subscribe(data => {});
    }

    setTimeout(() => {
      this.GetTraineeCourseInfo();
    }, 200);
  }

  private getStatus(data: any) {
    if (data.enrollmentStatus == true) {
      this.strStatus = "Enrolled";
    } else {
      this.strStatus = "Not enrolled";
    }
  }

  private GetBasicCourseInfo(data: any) {
    this.strName = data.name;
    this.strCategory = data.category;
    this.strDescription = data.description;
    this.currEnroll = data.currentEnrollments;
    this.maxEnroll = data.maxEnrollments;

    for (let i = 0; i < data.trainers.length; i++) {
      if (i != data.trainers.length - 1) {
        this.strTrainers += data.trainers[i] + ", ";
      } else {
        this.strTrainers += data.trainers[i];
      }
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
