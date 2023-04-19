import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcourses',
  templateUrl: './searchcourses.page.html',
  styleUrls: ['./searchcourses.page.scss'],
})
export class SearchcoursesPage {

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

    this.GetAllCourses();
  }

  GetAllCourses() {
    this.items = [];
    this.queryParam = "sortBy=" + this.sortBy + "&sortMode=" + this.sortMode;

    if (this.strNameForm.trim().length != 0) {
      this.queryParam += "&name=" + this.strNameForm.trim();
    }
    if (this.strCategoryForm.trim().length != 0) {
      this.queryParam += "&category=" + this.strCategoryForm.trim();
    }

    this.getAllCoursesToTrainee();
  }

  changeSortMode() {}

  changeSortBy() {}

  private getAllCoursesToTrainee() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainee/' + this.srvMain.IdUser.toString()
        + '/get-courses/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        let assignStatus = "";
        let progressStatus = "";

        if (data[i].enrolmentStatus == true) {
          assignStatus = data[i].completedAssignments.toString() + '/'
            + data[i].numberOfAssignments.toString() + " assignments";
          progressStatus = (100 * (data[i].completedAssignments
            / data[i].numberOfAssignments)).toString() + "%";
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
