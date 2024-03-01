import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  hasClick:any = false;
  text:any;
  fakeData:any = [1,2,3,4,5,6,7];
  data:any;

  constructor(public server : ServerService,public otherService : OtherService) {

    this.otherService.statusBar("#4caf50",2);
  }

  ngOnInit() 
  {
    this.loadData();
  }

  async loadData()
  {
    this.server.getCourse().subscribe((response:any) => {
    
    this.data = response.data;

    });
  }
}

