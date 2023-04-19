import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursedetailcontentstrainer',
  templateUrl: './coursedetailcontentstrainer.page.html',
  styleUrls: ['./coursedetailcontentstrainer.page.scss'],
})
export class CoursedetailcontentstrainerPage {

  public items = [];
  courseName: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.courseName = this.srvMain.selectedCourseName;
    this.GetCourseContentsToTrainer();
  }

  GetCourseContentsToTrainer() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/get-course-contents/'
        + this.srvMain.IdCourse.toString() + '/on-page/0',
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let needsGradingLabel = "";
        if (data[i].needsGrading == true) {
          needsGradingLabel = "Needs grading by the teacher.";
        }

        this.items.push({
          text: data[i].text,
          needsGradingLabel: needsGradingLabel
        });
      }
    });
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
