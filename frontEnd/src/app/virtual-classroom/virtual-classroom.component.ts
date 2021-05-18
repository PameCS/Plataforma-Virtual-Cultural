import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Service/token-storage.service';
import { Course } from 'src/app/Model/Course';
import {UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-virtual-classroom',
  templateUrl: './virtual-classroom.component.html',
  styleUrls: ['./virtual-classroom.component.css']
})
export class VirtualClassroomComponent implements OnInit {
  signOut = faSignOutAlt;
  private roles: string[];
  courses: Course[];
  isLoggedIn = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService,private service: UserService,private router: Router) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
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
    this.router.navigate(["home"]);
  }

  courseHome(courses: Course):void{
    localStorage.setItem("pk_idCourse",courses.pk_idCourse.toString());
    this.router.navigate(["HomeVirtualClassRoom"]);
  }

 

}
