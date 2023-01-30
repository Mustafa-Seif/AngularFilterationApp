import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormInterface } from 'src/app/interfaces/form-interface';
import { EmployeesService } from 'src/app/services/employees.service';

ActivatedRoute
EmployeesService
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  details:FormInterface={
    id:0,
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
 constructor(private employeeService: EmployeesService , private route:ActivatedRoute){}
//  GET PRAMS ID 
   id = this.route.snapshot.params["id"];
//  GET EMPLOYEE DETAILS 
 ngOnInit(){
  this.employeeService.getEmployeeData(this.id).subscribe((val)=>{
     this.details = val;
  })
 }
};
