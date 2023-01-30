import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormInputs } from '../interfaces/form-inputs';
import { FormSelect } from '../interfaces/form-select';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  constructor(private http:HttpClient) { }
  getFormInputs(){
    return this.http.get<FormInputs[]>("/api/formInput");
  }
  getFormSelect(){
    return this.http.get<FormSelect[]>("/api/formSelect");
  }
}
