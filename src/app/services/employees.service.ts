import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormInterface } from '../interfaces/form-interface';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http:HttpClient) { }
  getEmployeesData(){
    return this.http.get<FormInterface[]>("/api/employees");
  }
  getEmployeeData(id:string){
    return this.http.get<FormInterface>(`/api/employees/${id}`);
  }
}
