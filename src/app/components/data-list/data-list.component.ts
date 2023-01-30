import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';
import { FormInterface } from 'src/app/interfaces/form-interface';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
  // GET PASSED DATA FROM PARENT COMPONENT(FILTERATIOM)
  @Input() filterVal: FormInterface = {
    id:0,
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
  
  employees: FormInterface[] = [];
  constructor(private employeeData: EmployeesService , private route:Router) {}
  // GET FILTER VALUE FROM PARENT COMPONENT

  ngOnInit(): void {
    // GET EMPLOYEES DATA FROM EMPLOYEES SERVICE
    this.employeeData.getEmployeesData().subscribe((val) => (this.employees = val));
  }

  ngDoCheck(){
    // UPDATE VALUE ON CHANGE 
    this.employeeData.getEmployeesData().subscribe(
      (val) =>
        (this.employees = val.filter((el) => {
          return (
            el.name.toLowerCase().includes(this.filterVal.name.toLowerCase()) &&
            el.department
              .toLowerCase()
              .includes(this.filterVal.department.toLowerCase()) &&
            el.experience
              .toLowerCase()
              .includes(this.filterVal.experience.toLowerCase())
          );
        }))
    );
  }
 
  // NAVAGATE TO EMPLOYEE DETAILES 
  handleNavDetailes(id:number){
     this.route.navigate(["/detailes",id])
  }
}
