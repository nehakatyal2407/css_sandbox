import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';


@Component({
  selector: 'app-cox-top-deals-table',
  templateUrl: './cox-top-deals-table.component.html',
  styleUrls: ['./cox-top-deals-table.component.scss']
})
export class CoxTopDealsTableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  data : string[]=[];
  isloading = false;
  loadData()
  {
    
    this.isloading = !this.isloading;
    this.http.get('http://localhost:54446/api/deals/top-vehicles')
    .subscribe(
      (data:string[]) => {console.log(JSON.stringify(data));
      this.data=data;},
      (error)=> {console.log(error);},
      ()=>{this.isloading = !this.isloading;}
    )
  }

}
