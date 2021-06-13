import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/Course';
import { TokenStorageService } from '../Service/token-storage.service';
import { UserService } from '../Service/user.service';
import {Event} from '../Model/Event';

@Component({
  selector: 'app-event-catalog',
  templateUrl: './event-catalog.component.html',
  styleUrls: ['./event-catalog.component.css']
})
export class EventCatalogComponent implements OnInit {
  private roles: string[];
  courses: Course[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
  events: Event[];
  currentEvent: Event = new Event();
  
  constructor(private tokenStorageService: TokenStorageService,private service: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSuperAdminBoard  = this.roles.includes('ROLE_SUPER_ADMIN');
      this.showProfessorBoard  = this.roles.includes('ROLE_PROFESSOR');
      this.showUserBoard  = this.roles.includes('ROLE_USER');
      this.username = user.username;
      this.service.getUserCourses(user)
    .subscribe(data => {
      this.courses = data;
    });
    }

    this.service.getEvent()
    .subscribe(data => {
      this.events = data;
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  
  selectedEvent(event: Event){
      this.currentEvent = event;
  }


}
