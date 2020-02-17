import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {
  data: IPost;
  isloading: boolean = false;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  back() {
    // Programatically navigating to home component
    this.router.navigate(['/home']);
  }

  loadData() {

    Observable.combineLatest([
      this.route.queryParamMap,
      this.route.paramMap
    ])
      .switchMap((combined) => {
        console.log(`combined[0].get('page'),combined[0].get('order')`);
        return combined[1].get('id');
      })
      .switchMap((i) => this.http.get(`http://localhost:3000/posts/${i}`))
      .switchMap((data: IPost) => {
        this.data = data;
        return this.http.get(`http://localhost:3000/comments/${data.id}`)
      }).subscribe((comment: IComment) => {
        this.data.comments = [comment];
      },
        (error) => { },
        () => { })

    //   this.route.paramMap
    // .switchMap((combined) => combined.get(`id`))   
    //   .switchMap((i) => this.http.get(`http://localhost:3000/posts/${i}`))
    //   .switchMap((data: IPost) => {
    //     this.data = data;
    //     return this.http.get(`http://localhost:3000/comments/${data.id}`)
    //   }).subscribe((comment: IComment) => {
    //     this.data.comments = [comment];
    //   },
    //     (error) => { },
    //     () => { })
    /**** switch Map approach to call multiple services and 
     avoid Observable<observable<object>>> which would have come using Map
    ******/
    // this.http.get(`http://localhost:3000/posts/1`)
    //   .switchMap((data: IPost) => {
    //     this.data = data;
    //     return this.http.get(`http://localhost:3000/comments/${data.id}`)
    //   }).subscribe((comment: IComment) => {
    //     this.data.comments = [comment];
    //   });

    /**** subscribe Inside subscribe ******/
    // this.http.get(`http://localhost:3000/posts/1`)
    //   .subscribe(
    //     (data: IPost) => {
    //       this.data = data;
    //       this.http.get(`http://localhost:3000/comments/${data.id}`)
    //         .subscribe(
    //           (comment: IComment) => {
    //             this.data.comments = [comment];
    //           }
    //         )
    //     }
    // );
  }

}

export interface IPost {
  id: number,
  title: string,
  author: string,
  comments: IComment[]
}

export interface IComment {
  id: number,
  body: string,
  postId: number
}
