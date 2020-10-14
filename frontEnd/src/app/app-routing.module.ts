import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { ListComponent } from './User/list/list.component';
import { EditComponent } from './User/edit/edit.component';
import {ListComponentClass} from './classroom/list/list.componentClass';
import {EditComponentClass} from './classroom/edit/edit.componentClass';
import {AddComponentClass} from './classroom/add/add.componentClass';


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listClassroom', component: ListComponentClass},
  {path: 'editClass' , component: EditComponentClass},
  {path: 'addClass', component: AddComponentClass}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
