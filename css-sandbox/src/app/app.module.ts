import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CoxTableComponent } from './cox-table/cox-table.component';

import { CoxTopDealsTableComponent } from './cox-top-deals-table/cox-top-deals-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CoxTableComponent,
    CoxTopDealsTableComponent,
    PostTableComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'post/:id',
        component: PostTableComponent  
      },
      {
        path: 'home',
        component: HomeComponent  
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
