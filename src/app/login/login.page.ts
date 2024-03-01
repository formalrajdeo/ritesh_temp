import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hasClick:any = false;
  setting:any;
  text:any;

  constructor(public server : ServerService,public otherService : OtherService) {

    this.otherService.statusBar("#ffffff",1);
  }

  ngOnInit() {
  }

  async login(data:any)
  {
    if(data.loginID.length == 0)
    {
      return this.otherService.toast("Please enter valid details");
    }

    this.hasClick = true;

    this.server.login(data).subscribe((response:any) => {

    if(response.msg != "done")
    {
      this.hasClick = false;

      this.otherService.toast(response.error);
    }
    else
    {
      localStorage.setItem('user_id',response.user_id);
      localStorage.setItem('student_name',response.student);
      localStorage.setItem('student_course',response.course.name);
      localStorage.setItem('login_id',response.id);
      localStorage.setItem('img',response.img);

      window.location.href = "/home";

    }

    });

    return;
  }
}

