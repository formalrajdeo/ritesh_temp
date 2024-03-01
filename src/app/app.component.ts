import { Component } from '@angular/core';
import { OtherService } from './service/other.service';
import { IonicModule,Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
//import OneSignal from 'onesignal-cordova-plugin';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Course Detail', url: '/course', icon: 'school' },
    { title: 'Study Material', url: '/assignment/0', icon: 'book' },
    { title: 'Assignments', url: '/assignment/1', icon: 'reader' },
    { title: 'Attendance', url: '/att', icon: 'create' },
    { title: 'Fee Details', url: '/fee', icon: 'cash' },
    { title: 'Latest Update', url: '/news', icon: 'volume-high' },
  ];

  name:any;
  id:any;
  img:any;

  constructor(public otherService : OtherService,private platform: Platform) {

    this.name   = localStorage.getItem('student_name');
    this.id = localStorage.getItem('login_id');
    this.img = localStorage.getItem('img');

    if(localStorage.getItem("user_id") && localStorage.getItem("user_id") != undefined)
    {
      this.otherService.redirect("home","root");
    }
    else
    {
      this.otherService.redirect("login","root");
    }

    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: '#4caf50' });
      StatusBar.setStyle({ style: Style.Dark });

      this.OneSignalInit();

    });

  }

  OneSignalInit(): void {
  
    /*OneSignal.setAppId("6dafe886-6e2a-4259-9b9e-58aeb8c4d994");
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
  
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
  
    if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != undefined)
    {
        OneSignal.sendTags({user_id: localStorage.getItem('user_id')});
    }*/
  }

  async logout()
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        localStorage.removeItem("user_id");
        this.otherService.redirect("login","root");
      }
    });
  }
}
