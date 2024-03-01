import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

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
    this.server.news().subscribe((response:any) => {
    
    this.data = response.data;

    });
  }
}

