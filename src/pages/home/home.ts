import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private users: Object;

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private loadingCtrl: LoadingController) {}

  private ionViewWillEnter(): void {
    const loading = this.loadingCtrl.create({
      content: "Please wait",
      spinner: "dots"
    });
    loading.present();
    this.userProvider.getUsers()
      .then(value => {
        this.users = value
        loading.dismiss();
      })
      .catch(err => {
        console.log(err)
        loading.dismiss();
      })
  }

}
