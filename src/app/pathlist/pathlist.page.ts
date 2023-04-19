import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pathlist',
  templateUrl: './pathlist.page.html',
  styleUrls: ['./pathlist.page.scss'],
})
export class PathlistPage {

  public items = [];
  buttonDis1: boolean;
  buttonDis2: boolean;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.GetPathsInProgress();
  }

  GetPathsInProgress() {
    this.buttonDis1 = true;
    this.buttonDis2 = null;
    this.GetPathsToTrainee("false");
  }

  GetCompletedPaths() {
    this.buttonDis1 = null;
    this.buttonDis2 = true;
    this.GetPathsToTrainee("true");
  }

  GetPathsToTrainee(completedPaths : string) {
    this.items = [];
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
      + '/get-account-paths/0?completed=' + completedPaths,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        const assignStatus = data[i].completedCourses.toString() + '/'
          + data[i].numberOfCourses.toString();
        const progressStatus = (100 * (data[i].completedCourses
          / data[i].numberOfCourses)).toString() + "%";

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
    this.srvMain.IdPath = item.id;

    setTimeout(() => {
      this.router.navigate(['/pathdetailinfo']);
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
