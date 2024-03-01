import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {

  hasClick:any = false;
  text:any;
  fakeData:any = [1,2,3,4,5,6,7];
  data:any;
  type:any;
  title:any;

  constructor(public server : ServerService,public otherService : OtherService,private route: ActivatedRoute) {

    this.otherService.statusBar("#4caf50",2);

  	this.type = this.route.snapshot.paramMap.get('type');

    this.title = this.type == 1 ? "Assignments" : "Study Material";
  }

  ngOnInit() 
  {
    this.loadData();
  }

  async loadData()
  {
    this.server.assignment(this.type).subscribe((response:any) => {
    
    this.data = response.data;

    });
  }
}

