import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursedetailinfotrainer',
  templateUrl: './coursedetailinfotrainer.page.html',
  styleUrls: ['./coursedetailinfotrainer.page.scss'],
})
export class CoursedetailinfotrainerPage {

  strCategory: string;
  strDescription: string;
  strTrainers: string;
  strName: string;
  currEnroll: number;
  maxEnroll: number;

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
    this.currEnroll = 0;
    this.maxEnroll = 0;

    this.GetTrainerCourseInfo();
  }

  GetTrainerCourseInfo() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/get-course-info/'
        + this.srvMain.IdCourse.toString(),
      {headers}
      ).subscribe(data => {
        this.GetBasicCourseInfo(data);
      });
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
