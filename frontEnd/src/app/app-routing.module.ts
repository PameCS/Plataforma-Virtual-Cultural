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
import {AddComponentAdvertisement} from './advertisements/add/add.componentAdvertisement';
import {EditComponentAdvertisement} from './advertisements/edit/edit.componentAdvertisement';
import {ListComponentAdvertisement} from './advertisements/list/list.componentAdvertisement';
import { AddEventComponent } from './Events/add-event/add-event.component';
import { ListEventComponent } from './Events/list-event/list-event.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { YoutubeliveComponent } from './youtubelive/youtubelive.component';
import {CourseCatalogComponent} from './course-catalog/course-catalog.component';
import {ClassroomCatalogComponent} from './classroom-catalog/classroom-catalog.component';
import {EventCatalogComponent} from './event-catalog/event-catalog.component';
import {ListProfessorsComponent} from './User/listProfesors/listProfessors.component';
import {LoginVirtualClassroomComponent} from './login-virtual-classroom/login-virtual-classroom.component';
import {VirtualClassroomComponent} from './virtual-classroom/virtual-classroom.component';
import { HomeVirtualClassRoomComponent } from './home-virtual-class-room/home-virtual-class-room.component';
import { SpaceAssignmentComponent } from './space-assignment/space-assignment.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listAd', component: AddComponentAdvertisement},
  {path: 'editAd', component: EditComponentAdvertisement},
  {path: 'addAd', component: ListComponentAdvertisement},
  {path: 'listClassroom', component: ListComponentClass},
  {path: 'editClass' , component: EditComponentClass},
  {path: 'addClass', component: AddComponentClass},
  {path: 'listCourse', component: ListCourseComponent},
  {path: 'editCourse' , component: EditCourseComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'addEvent', component: AddEventComponent},
  {path: 'listEvent', component: ListEventComponent},
  {path: 'editEvent', component: EditEventComponent},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'youtubelive',component: YoutubeliveComponent},
  {path: 'courseCatalog',component: CourseCatalogComponent},
  {path: 'classroomCatalog',component: ClassroomCatalogComponent},
  {path: 'eventCatalog',component: EventCatalogComponent},
  {path: 'professorList',component: ListProfessorsComponent},
  {path:'loginVirtualClass',component: LoginVirtualClassroomComponent},
  {path:'virtualClassroom',component: VirtualClassroomComponent},
  {path: 'HomeVirtualClassRoom', component: HomeVirtualClassRoomComponent},
  {path: 'advertisementList', component: ListComponentAdvertisement},
  {path: 'spaceassignment', component: SpaceAssignmentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }