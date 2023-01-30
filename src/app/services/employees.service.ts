import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObjInputFilter } from '../interfaces/obj-input-filter';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http:HttpClient) { }
  getEmployeesData(){
    console.log(this.http.get<ObjInputFilter[]>("http://localhost:3000/employees"))
    return this.http.get<ObjInputFilter[]>("http://localhost:3000/employees");
  }
  getEmployeeData(id:string){
    return this.http.get<ObjInputFilter>(`http://localhost:3000/employees/${id}`);
  }
}
