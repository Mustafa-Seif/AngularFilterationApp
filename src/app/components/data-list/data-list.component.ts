import { Component, SimpleChanges } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';
import { FormInterface } from 'src/app/interfaces/form-interface';
import { ActivatedRoute } from '@angular/router';
import { FormFilteration } from 'src/app/interfaces/form-filteration';
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
  // INITIAL ARRY OF employees DATA
  employees: FormInterface[] = [];
  searchDone:boolean=false;
  filteredData: FormFilteration = {
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };

  constructor(
    private employeeData: EmployeesService,
    private route: Router,
    private _route: ActivatedRoute
  ) {}

  // GET FILTER VALUE FROM PARENT COMPONENT
  ngOnInit(): void {
    this.getEmployeeData();
    this.getQueryParmas();
  }
  // GET EMPLOYEES DATA FROM EMPLOYEES SERVICE
  getEmployeeData() {
    this.employeeData
      .getEmployeesData()
      .subscribe((val) => (this.employees = val));
  }
  // GET FILTER DATA FROM QUERY
  getQueryParmas() {
    this._route.queryParams.subscribe((params: any) => {
      this.dataFilteration(params);
    });
  }

  dataFilteration(data: any) {
    // FILTERATION EMPLUEES DATA
    if (Object.keys(data).length !== 0) {
      this.searchDone=true
      this.employeeData.getEmployeesData().subscribe(
        (val) =>
          (this.employees = val.filter((el) => {
            return (
              (data.name
                ? el.name?.toLowerCase().includes(data.name?.toLowerCase())
                : true) &&
              (data.salary ? el.salary == data.salary : true) &&
              (data.department
                ? el.department
                    .toLowerCase()
                    .includes(data.department.toLowerCase())
                : true) &&
              (data.experience ? el.experience == 'Less than a year'
                ? data.experience?.toLowerCase().match(/Month/g)
                : el.experience == 'From 1-3 Years'
                ? data.experience?.toLowerCase().match(/[2-3]+/g)
                : el.experience == 'Years or above'
                ? data.experience?.toLowerCase().match(/([3-9])/g)
                : true :true)
            );
          }))
      );
    } else {
      this.searchDone=false;

      this.getEmployeeData();
    }
  }

  // NAVAGATE TO EMPLOYEE DETAILES
  handleNavDetailes(id: number) {
    this.route.navigate(['/detailes', id]);
  }
}
