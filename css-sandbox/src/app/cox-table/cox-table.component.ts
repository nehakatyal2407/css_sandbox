import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeal } from '../deal';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map, zip, toArray } from 'rxjs/operators';
import { of } from 'rxjs';


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
    this.http.get('http://localhost:54446/api/deals')
      .pipe(
        map(x => x),
        groupBy((deal: IDeal) => deal.vehicle),
        mergeMap(group => {
          console.log(group);
          return group;
        })
      ).subscribe(
        (data) => {
          // console.log(JSON.stringify(data));
          // this.data = data;
        },
        error => {
          console.log(`Error Method`);
        },
        () => {
          console.log(`Complete Method`);
          this.isloading = !this.isloading;
        }
      );

    // .map(x => x.json())
    // .groupBy(x => x.type)
    // .mergeMap(list$ => { // each emission is a stream

    //   /* A stream of "aggregated" data. */
    //   const count$ = list$.count();

    //   /* Format the result. */
    //   return count$.map(count => ({ type: list$.key, count }));
    // });
    // this.http.get('http://localhost:54446/api/deals').subscribe(
    //   (data: IDeal[]) => {
    //     console.log(JSON.stringify(data));
    //     this.data = data;
    //   },
    //   error => {
    //     console.log(`Error Method`);
    //   },
    //   () => {
    //     console.log(`Complete Method`);
    //     this.isloading = !this.isloading;
    //   }
    // )
  }
}
