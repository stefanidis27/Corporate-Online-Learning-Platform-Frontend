import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutappadmin',
  templateUrl: './aboutappadmin.page.html',
  styleUrls: ['./aboutappadmin.page.scss'],
})
export class AboutappadminPage {

  public strDescription: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router) {
  }

  ionViewWillEnter() {
    this.strDescription = "";

    this.GetWebsiteDescription();
  }

  GetWebsiteDescription() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'common/get-website-description',
      {headers}
      ).subscribe(data => {
        this.strDescription = data.description;
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
