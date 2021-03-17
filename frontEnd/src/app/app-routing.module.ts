import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { ListComponent } from './User/list/list.component';
import { EditComponent } from './User/edit/edit.component';
import {ListComponentClass} from './classroom/list/list.componentClass';
import {EditComponentClass} from './classroom/edit/edit.componentClass';
import {AddComponentClass} from './classroom/add/add.componentClass';
import {ListCourseComponent} from './Course/list/list-course.component';
import {EditCourseComponent} from './Course/edit/edit-course.component';
import {AddCourseComponent} from './Course/add/add-course.component';

import { AddEventComponent } from './Events/add-event/add-event.component';
import { ListEventComponent } from './Events/list-event/list-event.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'list', component: ListComponent,canActivate:[AuthGaurdService]},
  {path: 'add', component: AddComponent, canActivate:[AuthGaurdService]},
  {path: 'edit', component: EditComponent, canActivate:[AuthGaurdService]},
  {path: 'listClassroom', component: ListComponentClass, canActivate:[AuthGaurdService]},
  {path: 'editClass' , component: EditComponentClass, canActivate:[AuthGaurdService]},
  {path: 'addClass', component: AddComponentClass, canActivate:[AuthGaurdService]},
  {path: 'listCourse', component: ListCourseComponent, canActivate:[AuthGaurdService]},
  {path: 'editCourse' , component: EditCourseComponent, canActivate:[AuthGaurdService]},
  {path: 'addCourse', component: AddCourseComponent, canActivate:[AuthGaurdService]},
  {path: 'addEvent', component: AddEventComponent, canActivate:[AuthGaurdService]},
  {path: 'listEvent', component: ListEventComponent, canActivate:[AuthGaurdService]},
  {path: 'editEvent', component: EditEventComponent, canActivate:[AuthGaurdService]},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }