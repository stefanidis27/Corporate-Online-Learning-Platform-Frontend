import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathdetailinfotrainer',
  templateUrl: './pathdetailinfotrainer.page.html',
  styleUrls: ['./pathdetailinfotrainer.page.scss'],
})
export class PathdetailinfotrainerPage {

  public items = [];
  strCategory: string;
  strName: string;
  currEnroll: number;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
    }

    ionViewWillEnter() {
      this.strCategory = "";
      this.strName = "";
      this.currEnroll = 0;
  
      this.GetTrainerCourseInfo();
    }

    GetTrainerCourseInfo() {
      const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };
      this.items = [];
  
      this.http.get<any>(
        this.srvMain.strWSPath + 'trainer/get-path-info/'
          + this.srvMain.IdPath.toString(),
        {headers}
        ).subscribe(data => {
          this.GetBasicCourseInfo(data);

          for (var i in data.courses) {
            this.items.push(data.courses[i]);
          }
        });
    }

    FirstButtonClick(item: any) {
      this.srvMain.IdCourse = item.id;

      setTimeout(() => {
        this.router.navigate(['/coursedetailinfotrainer']);
      }, 300);
    }

    private GetBasicCourseInfo(data: any) {
      this.strName = data.name;
      this.strCategory = data.category;
      this.currEnroll = data.currentEnrollments;
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
