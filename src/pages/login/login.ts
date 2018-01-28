import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from "../../providers/login/login";
import { TabsPage } from "../tabs/tabs";

interface IHttpResponse {
  ok: boolean,
  token: string
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {

  private username: string;
  private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private doLogin() {
    this.loginProvider.doLogin(this.username, this.password)
      .then((data: IHttpResponse) => {
        if (data.ok) {
          localStorage.setItem("token", data.token);
          this.navCtrl.setRoot(TabsPage);
        } else {
          console.error("login fail");
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

}
