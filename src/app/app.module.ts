// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//  COMPENENTS
import { AppComponent } from './app.component';
import { FiltertionComponent } from './components/filtertion/filtertion.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { ComponentsWrapperComponent } from './components/components-wrapper/components-wrapper.component';
@NgModule({
  declarations: [AppComponent, FiltertionComponent, DataListComponent, ComponentsWrapperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
