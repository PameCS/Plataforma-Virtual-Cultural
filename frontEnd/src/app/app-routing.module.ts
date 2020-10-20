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

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listClassroom', component: ListComponentClass},
  {path: 'editClass' , component: EditComponentClass},
  {path: 'addClass', component: AddComponentClass},
  {path: 'listCourse', component: ListCourseComponent},
  {path: 'editCourse' , component: EditCourseComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'addEvent', component: AddEventComponent},
  {path: 'listEvent', component: ListEventComponent},
  {path: 'editEvent', component: EditEventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }