import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';
import { AddComponentClass } from './classroom/add/add.componentClass';
import { EditComponentClass } from './classroom/edit/edit.componentClass';
import { ListComponentClass } from './classroom/list/list.componentClass';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddComponentClass,
    EditComponentClass,
    ListComponentClass
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
