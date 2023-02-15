import { Component } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormFilteration } from 'src/app/interfaces/form-filteration';
@Component({
  selector: 'app-filtertion',
  templateUrl: './filtertion.component.html',
  styleUrls: ['./filtertion.component.scss'],
})
export class FiltertionComponent {
  constructor(private dynamicForm: FormsService, private route: Router) {}
  // PANAL STATUS
  panelOpenState = false;
  // INITIAL VALUES TO DYNAMIC FORM
  formInputs: any[] = [];
  // DEFINE INITIAL VALUE FOR INPUTS VALUES
  filterData: FormFilteration = {
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
  
  // NG ON INIT
  ngOnInit(): void {
    // GET DYNAMIC FORM INPUTS FROM FORMS SERVICE
    this.dynamicForm
      .getFormInputs()
      .subscribe((val) => (this.formInputs = val));
  }
  //  REACTIVE FORM
  filterForm: FormGroup = new FormGroup({
    name: new FormControl('',),
    joinDate: new FormControl('',),
    salary: new FormControl('',),
    department: new FormControl('',),
    experience: new FormControl('',),
  });

  handleSubmit():void {
    // SAVE VALUES INPUTS IN OBJECT
    // if (this.filterForm.status === 'VALID') {
      this.filterData = this.filterForm.value;
      this.route.navigate(['employeeslist'], {
        queryParams: this.filterData,
        queryParamsHandling: 'merge',
      });
    // }
  }
  // CLEAR INPUTS VALUES
  handleClear() {
    this.filterForm.reset()
    // CLEAR QUERY PARAMS
    this.route.navigateByUrl('employeeslist');
  }
}
