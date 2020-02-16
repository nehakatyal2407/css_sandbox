import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeal } from '../deal';

@Component({
  selector: 'app-cox-table',
  templateUrl: './cox-table.component.html',
  styleUrls: ['./cox-table.component.scss']
})
export class CoxTableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  data: IDeal[] = [];
  isloading = false;
  async loadData() {
    this.isloading = !this.isloading;
    this.http.get('http://localhost:54446/api/deals').subscribe(
      (data: IDeal[]) => {
        console.log(JSON.stringify(data));
        this.data = data;
      },
      error => {
        console.log(`Error Method`);
      },
      () => {
        console.log(`Complete Method`);
        this.isloading = !this.isloading;
      }
    )
  }
}
