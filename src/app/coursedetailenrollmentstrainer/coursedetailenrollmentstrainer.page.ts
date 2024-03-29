import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursedetailenrollmentstrainer',
  templateUrl: './coursedetailenrollmentstrainer.page.html',
  styleUrls: ['./coursedetailenrollmentstrainer.page.scss'],
})
export class CoursedetailenrollmentstrainerPage {

  public items = [];
  strNameForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  queryParam: string;
  sortMode: string;
  sortBy: string;
  courseName: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strDepartmentForm = "";
    this.strPositionForm = "";
    this.strSeniorityForm = "";
    this.sortBy = "enrollmentDate";
    this.sortMode = "desc"
    this.courseName = this.srvMain.selectedCourseName;

    this.GetAllEnrollments();
  }

  GetAllEnrollments() {
    this.items = [];
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;

    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strDepartmentForm.trim().length != 0) {
      this.queryParam += "&department=" + this.strDepartmentForm.trim();
    }
    if (this.strSeniorityForm.trim().length != 0) {
      this.queryParam += "&seniority=" + this.strSeniorityForm.trim();
    }
    if (this.strPositionForm.trim().length != 0) {
      this.queryParam += "&position=" + this.strPositionForm.trim();
    }

    this.getAllEnrollmentsToTrainee();
  }

  private getAllEnrollmentsToTrainee() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/get-course-enrollments/'
        + this.srvMain.IdCourse.toString()
        + '/on-page/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        const assignStatus = data[i].completedAssignments.toString() + '/'
          + data[i].numberOfAssignments.toString();
        const progressStatus = (100 * (data[i].completedAssignments
          / data[i].numberOfAssignments)).toString() + "%";

        this.items.push({
          name: data[i].name,
          completedAssignmentsStatus: assignStatus,
          progressStatus: progressStatus,
          enrollmentDate: data[i].enrollmentDate,
          id: data[i].id
        });
      }
    });
  }

  changeSortMode() {}

  changeSortBy() {}

  FirstButtonClick(item: any) {
    this.srvMain.IdTraineeToReview = item.id;
    this.srvMain.NameTraineeToReview = item.name;

    setTimeout(() => {
      this.router.navigate(['/reviewtraineework']);
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
