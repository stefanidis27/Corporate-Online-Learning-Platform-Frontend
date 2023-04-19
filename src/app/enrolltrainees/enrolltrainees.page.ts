import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolltrainees',
  templateUrl: './enrolltrainees.page.html',
  styleUrls: ['./enrolltrainees.page.scss'],
})
export class EnrolltraineesPage {

  public items = [];
  strNameForm: string;
  strDepartmentForm: string;
  strPositionForm: string;
  strSeniorityForm: string;
  strEmailForm: string;
  queryParam: string;
  disableButton2: boolean;
  disableButton3: boolean;
  currentEnrollments: number;
  totalEnrollments: number;
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
    this.strEmailForm = "";
    this.courseName = this.srvMain.selectedCourseName;

    this.GetEnrollmentsStatus();
    this.SecondButtonClick();
  }

  GetEnrollmentsStatus() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-course-max-and-current-enrollments/'
        + this.srvMain.IdCourse.toString(),
      { headers }
    ).subscribe(data => {
      this.currentEnrollments = data.currentEnrollments;
      this.totalEnrollments = data.maxEnrollments;
    });
  }

  FirstButtonClick(item: any) {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    if (item.enrollOrUnEnrollLabel === "Unenroll") {
      this.http.post<any>(
        this.srvMain.strWSPath + 'hr/un-enroll-trainee/' + item.id
        + '/from-course/' + this.srvMain.IdCourse.toString(),
        { },
        { headers }
      ).subscribe(data => {});
    } else {
      this.http.post<any>(
        this.srvMain.strWSPath + 'hr/enroll-trainee/' + item.id
          + '/in-course/' + this.srvMain.IdCourse.toString(),
        { },
        { headers }
      ).subscribe(data => {});
    }

    setTimeout(() => {
      this.GetEnrollmentsStatus();
      this.SecondButtonClick();
    }, 300);
  }

  SecondButtonClick() {
    this.disableButton2 = true;
    this.disableButton3 = null;
    this.items = [];
    this.determineQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/manage-enrollments/'
        + this.srvMain.IdCourse.toString()
        + '/on-page/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let enrollmentDate = "";
        let enrollOrUnEnrollLabel = "Enroll";
        let disableButton = false;
        if (data[i].enrollmentDate != null) {
          enrollmentDate = data[i].enrollmentDate;
          enrollOrUnEnrollLabel = "Unenroll"
          if (this.currentEnrollments == 0) {
            disableButton = true;  
          }
        } else if (this.currentEnrollments == this.totalEnrollments) {
          disableButton = true;
        }

        this.items.push({
          id: data[i].id,
          name: data[i].name,
          email: data[i].email,
          enrollOrUnEnrollLabel: enrollOrUnEnrollLabel,
          enrollmentDate: enrollmentDate,
          disableButton: disableButton,
          hiddenButton: null
        });
      }
    });
  }

  ThirdButtonClick() {
    this.disableButton2 = null;
    this.disableButton3 = true;
    this.items = [];
    this.determineQueryParam();
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'hr/get-course-enrollments/'
        + this.srvMain.IdCourse.toString()
        + '/on-page/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push({
          id: data[i].id,
          name: data[i].name,
          email: data[i].email,
          enrollOrUnEnrollLabel: "",
          enrollmentDate: data[i].enrollmentDate,
          disableButton: true,
          hiddenButton: true
        });
      }
    });
  }

  FourthButtonClick() {
    if (this.disableButton2 == true) {
      this.SecondButtonClick();
    } else {
      this.ThirdButtonClick();
    }
  }

  determineQueryParam() {
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

  btnLogOutClick() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.post<any>(this.srvMain.strWSPath + 'auth/logout',
    {}, {headers}).subscribe(data => {});

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 300);
  }
}
