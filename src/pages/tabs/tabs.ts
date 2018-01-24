import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { MessagePage } from "../message/message";
import { SettingPage } from "../setting/setting";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private tabHome: any;
  private tabContact: any;
  private tabMessage: any;
  private tabSetting: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabHome = HomePage;
    this.tabContact = ContactPage;
    this.tabMessage = MessagePage;
    this.tabSetting = SettingPage;
  }
  
}
