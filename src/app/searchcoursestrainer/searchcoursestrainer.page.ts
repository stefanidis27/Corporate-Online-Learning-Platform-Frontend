import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcoursestrainer',
  templateUrl: './searchcoursestrainer.page.html',
  styleUrls: ['./searchcoursestrainer.page.scss'],
})
export class SearchcoursestrainerPage {

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

    this.getAllCoursesToTrainer();
  }

  changeSortMode() {}

  changeSortBy() {}

  private getAllCoursesToTrainer() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/' + this.srvMain.IdUser.toString()
        + '/get-courses/0?' + this.queryParam,
      {headers}
    ).subscribe(data => {
      for (var i in data) {
        let buttonLabel = "Grade assignments"
        if (data[i].noAssignments == 0) {
          buttonLabel = "Add assignments"
        }

        this.items.push({
          name: data[i].name,
          noAssign: data[i].noAssignments,
          category: data[i].category,
          buttonLabel: buttonLabel,
          id: data[i].id
        });
      }
    });
  }

  FirstButtonClick(item: any) {
    this.srvMain.IdCourse = item.id;
    this.srvMain.selectedCourseName = item.name;

    if (item.buttonLabel === "Add assignments") {
      setTimeout(() => {
        this.router.navigate(['/courseaddassignments']);
      }, 300);
    } else {
      setTimeout(() => {
        this.router.navigate(['/coursedetailenrollmentstrainer']);
      }, 300);
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
