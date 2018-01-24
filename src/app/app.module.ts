import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from "../pages/contact/contact";
import { MessagePage } from "../pages/message/message";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingPage } from "../pages/setting/setting";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    MessagePage,
    TabsPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    MessagePage,
    TabsPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
