import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-att',
  templateUrl: './att.page.html',
  styleUrls: ['./att.page.scss'],
})
export class AttPage implements OnInit {

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
    this.server.att().subscribe((response:any) => {
    
    this.data = response.data;

    });
  }
}

