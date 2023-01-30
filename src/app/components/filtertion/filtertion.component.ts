import { Component } from '@angular/core';
import { ObjInputFilter } from 'src/app/interfaces/obj-input-filter';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-filtertion',
  templateUrl: './filtertion.component.html',
  styleUrls: ['./filtertion.component.scss'],
})
export class FiltertionComponent {
  constructor() {}
  panelOpenState = false;
  // DEFINE INITIAL VALUE FOR INPUTS VALUES
  filterData: ObjInputFilter = {
    name: '',
    joinData: '',
    department: '',
    salary: 0,
    experience: '',
  };
  // CLEAR INPUTS VALUES
  handleClear() {
    this.filterData = {
      name: '',
      joinData: '',
      department: '',
      salary: 0,
      experience: '',
    };
  }

  handleFilter(fun: any): void {
    console.log(this.filterData);
  }
}
