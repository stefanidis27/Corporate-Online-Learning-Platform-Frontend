import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporttype',
  templateUrl: './reporttype.page.html',
  styleUrls: ['./reporttype.page.scss'],
})
export class ReporttypePage {

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) { }

  ionViewWillEnter() {
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
