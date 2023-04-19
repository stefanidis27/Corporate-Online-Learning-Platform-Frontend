import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpaths',
  templateUrl: './searchpaths.page.html',
  styleUrls: ['./searchpaths.page.scss'],
})
export class SearchpathsPage {

  public items = [];
  strNameForm: string;
  strCategoryForm: string;
  queryParam: string;
  sortMode: string;
  sortBy: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc"

    this.GetAllPaths();
  }

  GetAllPaths() {
    this.items = [];
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;

    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }

    this.getAllPathsToTrainee();
  }

  changeSortMode() {}

  changeSortBy() {}

  private getAllPathsToTrainee() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
        + '/get-paths/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let assignStatus = "";
        let progressStatus = "";

        if (data[i].enrollmentStatus == true) {
          assignStatus = data[i].completedCourses.toString() + '/'
            + data[i].numberOfCourses.toString() + " courses";
          progressStatus = (100 * (data[i].completedCourses
            / data[i].numberOfCourses)).toString() + "%";
        }

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

  SecondButtonClick(item: any) {
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
