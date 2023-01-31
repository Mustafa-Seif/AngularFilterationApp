import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { FiltertionComponent } from './components/filtertion/filtertion.component';

const routes: Routes = [
  {
    path: "",
    component: FiltertionComponent,
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
