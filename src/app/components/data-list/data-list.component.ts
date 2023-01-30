import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjInputFilter } from 'src/app/interfaces/obj-input-filter';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
  // GET PASSED DATA FROM PARENT COMPONENT(FILTERATIOM)
  @Input() filterVal: ObjInputFilter = {
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
 
  // @Output ActionFilter = new EventEmitter<any>();

  employees: ObjInputFilter[] = [];
  constructor(private employeeData: EmployeesService) {}
  // GET FILTER VALUE FROM PARENT COMPONENT

  // GET EMPLOYEES DATA FROM EMPLOYEES SERVICE
  ngOnInit(): void {
    this.employeeData.getEmployeesData().subscribe((val) => (this.employees = val));
    // this.ActionFilter.emit(handleFilteration)
  }
 
  // HANDLE GET & FILTER THE EMPLOYYEES DATA 
  handleFilteration(): void {
    this.employeeData.getEmployeesData().subscribe(
      (val) =>
        (this.employees = val.filter((el) => {
          return (
            el.name.toLowerCase().includes(this.filterVal.name.toLowerCase()) ||
            el.joinData
              .toLowerCase()
              .includes(this.filterVal.joinData.toLowerCase()) &&
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
}
