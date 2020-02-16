import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CoxTableComponent } from './cox-table/cox-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CoxTopDealsTableComponent } from './cox-top-deals-table/cox-top-deals-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CoxTableComponent,
    CoxTopDealsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
