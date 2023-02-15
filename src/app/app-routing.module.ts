import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsWrapperComponent } from './components/components-wrapper/components-wrapper.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';


const routes: Routes = [
  { path: '', redirectTo: 'employeeslist', pathMatch: 'full' },
  {
    path: 'employeeslist',
    component: ComponentsWrapperComponent,
  },
  
  {
    path: "detailes/:id",
    component: EmployeeCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
