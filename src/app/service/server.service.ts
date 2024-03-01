import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  //url = "http://localhost/oprating/api/";
  url = "https://operatingmedia.org/api/";

  constructor(private http: HttpClient) { }

  login(data:any)
  {
    return this.http.post(this.url+'login',data)
             .pipe(map(results => results));
  }

  homepage()
  {
    return this.http.get(this.url+'home/'+localStorage.getItem("user_id"))
             .pipe(map(results => results));
  }

  getCourse()
  {
    return this.http.get(this.url+'courseDetail/'+localStorage.getItem("user_id"))
             .pipe(map(results => results));
  }

  assignment(type:any)
  {
    return this.http.get(this.url+'assignment/'+localStorage.getItem("user_id")+'?type='+type)
             .pipe(map(results => results));
  }

  att()
  {
    return this.http.get(this.url+'attendance/'+localStorage.getItem("user_id"))
             .pipe(map(results => results));
  }

  fee()
  {
    return this.http.get(this.url+'getFee/'+localStorage.getItem("user_id"))
             .pipe(map(results => results));
  }

  news()
  {
    return this.http.get(this.url+'news/'+localStorage.getItem("user_id"))
             .pipe(map(results => results));
  }
}
