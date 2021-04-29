import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Service/token-storage.service';
import { Course } from 'src/app/Model/Course';
import {UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virtual-classroom',
  templateUrl: './virtual-classroom.component.html',
  styleUrls: ['./virtual-classroom.component.css']
})
export class VirtualClassroomComponent implements OnInit {
  private roles: string[];
  courses: Course[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private service: UserService,private router: Router) { }

  ngOnInit(){
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
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  courseHome(courses: Course):void{
    localStorage.setItem("pk_courseCode",courses.pk_courseCode.toString());
    this.router.navigate(["HomeVirtualClassRoom"]);
  }

}
