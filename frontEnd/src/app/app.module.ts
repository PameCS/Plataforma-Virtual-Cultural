import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';
import { AddComponentClass } from './classroom/add/AddComponentClass';
import { EditComponentClass } from './classroom/edit/edit.componentClass';
import { ListComponentClass } from './classroom/list/list.componentClass';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';

import { ListCourseComponent } from './Course/list/list-course.component';
import { AddCourseComponent } from './Course/add/add-course.component';
import { EditCourseComponent } from './Course/edit/edit-course.component';

import { AddEventComponent } from './Events/add-event/add-event.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';
import { ListEventComponent } from './Events/list-event/list-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddComponentClass,
    EditComponentClass,
    ListComponentClass,
    ListCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    AddEventComponent,
    EditEventComponent,
    ListEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
