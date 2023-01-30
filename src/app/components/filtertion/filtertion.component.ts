import { Component } from '@angular/core';
import { FormInputs } from 'src/app/interfaces/form-inputs';
import { FormInterface } from 'src/app/interfaces/form-interface';
import { FormSelect } from 'src/app/interfaces/form-select';
import { FormsService } from 'src/app/services/forms.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-filtertion',
  templateUrl: './filtertion.component.html',
  styleUrls: ['./filtertion.component.scss'],
})
export class FiltertionComponent {
  constructor(private dynamicForm: FormsService) {}
  panelOpenState = false;
  // INITIAL VALUES TO DYNAMIC FORM
  formInputs: FormInputs[]=[];
  formSelect:FormSelect[]=[];
  arrOfKeys:any;
  // DEFINE INITIAL VALUE FOR INPUTS VALUES
  filterData: FormInterface = {
    id: 0,
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
  
  // CLEAR INPUTS VALUES
  handleClear() {
    this.filterData = {
      id: 0,
      name: '',
      joinData: '',
      department: '',
      salary: 0,
      experience: '',
    };
  };
  // NG ON INIT 
   ngOnInit(): void{
  // GET DYNAMIC FORM INPUTS FROM FORMS SERVICE 
    this.dynamicForm.getFormInputs().subscribe((val)=>this.formInputs = val)
   
  // GET DYNAMIC FORM SELECT FROM FORMS SERVICE 
   this.dynamicForm.getFormSelect().subscribe((val)=>this.formSelect = val)
   console.log(this.formInputs , this.formSelect )
   };
  //  REACTIVE FORM 
  filterForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    JoinDate: new FormControl("",[Validators.required]),
    salary: new FormControl("",[Validators.required]),
    department: new FormControl("",[Validators.required]),
    experience: new FormControl("",[Validators.required]),

  })

  handleSubmit(){
    // SAVE VALUES INPUTS IN OBJECT 
     this.filterData.name=this.filterForm.value.name;
     this.filterData.joinData =this.filterForm.value.joinData ;
     this.filterData.department=this.filterForm.value.department ;
     this.filterData.salary=this.filterForm.value.salary ;
     this.filterData.experience=this.filterForm.value.experience ;
  };
};
