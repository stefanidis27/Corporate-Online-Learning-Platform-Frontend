import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SrvMainService } from '../srv-main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpathstrainer',
  templateUrl: './searchpathstrainer.page.html',
  styleUrls: ['./searchpathstrainer.page.scss'],
})
export class SearchpathstrainerPage {

  public items = [];
  strNameForm: string;
  strCategoryForm: string;
  queryParam: string;
  sortMode: string;
  sortBy: string;

  constructor(
    private http: HttpClient,
    private srvMain: SrvMainService,
    private router: Router,
    private alertController: AlertController) {
  }

  ionViewWillEnter() {
    this.strNameForm = "";
    this.strCategoryForm = "";
    this.sortBy = "currentEnrollments";
    this.sortMode = "desc";

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

    this.getAllPathsToTrainer();
  }

  changeSortMode() {}

  changeSortBy() {}

  private getAllPathsToTrainer() {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.get<any>(
      this.srvMain.strWSPath + 'trainer/' + this.srvMain.IdUser.toString()
        + '/get-paths/0?' + this.queryParam,
      { headers }
    ).subscribe(data => {
      for (var i in data) {
        this.items.push(data[i]);
      }
    });
  }

  SecondButtonClick(item: any) {
    this.srvMain.IdPath = item.id;

    setTimeout(() => {
      this.router.navigate(['/pathdetailinfotrainer']);
    }, 300);
  }

  ThirdButtonClick(item: any) {
    this.presentAlert(item);
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Do you want to permanently delete this path? Please confirm.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.DeletePath(item);
          },
        },
      ],
    });

    await alert.present();
  }

  private DeletePath(item: any) {
    const headers = { 'Authorization': 'Bearer ' + this.srvMain.Token };

    this.http.delete<any>(
      this.srvMain.strWSPath + 'trainer/delete-path/' + item.id.toString(),
      { headers }
    ).subscribe(data => { });

    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
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
