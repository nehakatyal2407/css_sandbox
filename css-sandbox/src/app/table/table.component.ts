import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data = [];
  isloading=false;
  async loadData() {
    this.isloading=!this.isloading;
    setTimeout(() => {
      this.data = [{ 'empId': 1001, 'empName': 'A', 'empSalary': '123456' },
      { 'empId': 1002, 'empName': 'B', 'empSalary': '123456' },
      { 'empId': 1003, 'empName': 'C', 'empSalary': '123456' },
      { 'empId': 1004, 'empName': 'D', 'empSalary': '123456' },
      { 'empId': 1005, 'empName': 'E', 'empSalary': '123456' }]
      this.isloading=!this.isloading;
    }, 5000);
  }
}
