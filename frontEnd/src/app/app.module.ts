import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';
import { AddComponentClass } from './classroom/add/add.componentClass';
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
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {YoutubeliveComponent} from './youtubelive/youtubelive.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { ClassroomCatalogComponent } from './classroom-catalog/classroom-catalog.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';

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
    ListEventComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    YoutubeliveComponent,
    CourseCatalogComponent,
    ClassroomCatalogComponent,
    EventCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [ServiceService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
