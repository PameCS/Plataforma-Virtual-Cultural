import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { ListComponent } from './User/list/list.component';
import { EditComponent } from './User/edit/edit.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
