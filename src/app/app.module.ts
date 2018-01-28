import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from "../pages/contact/contact";
import { MessagePage } from "../pages/message/message";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingPage } from "../pages/setting/setting";
import { LoginPage } from "../pages/login/login";
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    MessagePage,
    TabsPage,
    SettingPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    MessagePage,
    TabsPage,
    SettingPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: "API_URL", useValue: "http://localhost:3000" },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider
  ]
})
export class AppModule { }
