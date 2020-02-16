import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-sandbox';
  data = [{ 'empId': 1001, 'empName': 'A', 'empSalary': '123456' },
  { 'empId': 1002, 'empName': 'B', 'empSalary': '123456' },
  { 'empId': 1003, 'empName': 'C', 'empSalary': '123456' },
  { 'empId': 1004, 'empName': 'D', 'empSalary': '123456' },
  { 'empId': 1005, 'empName': 'E', 'empSalary': '123456' }
  ]
}
