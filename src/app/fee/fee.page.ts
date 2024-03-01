import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.page.html',
  styleUrls: ['./fee.page.scss'],
})
export class FeePage implements OnInit {

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
    this.server.fee().subscribe((response:any) => {
    
    this.data = response.data;

    });
  }
}

