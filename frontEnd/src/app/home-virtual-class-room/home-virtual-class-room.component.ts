import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Model/Course';
import { UserService } from '../Service/user.service';
import { TokenStorageService } from '../Service/token-storage.service';

@Component({
  selector: 'app-home-virtual-class-room',
  templateUrl: './home-virtual-class-room.component.html',
  styleUrls: ['./home-virtual-class-room.component.css']
})
export class HomeVirtualClassRoomComponent implements OnInit {
  course :Course= new Course();
  showUserBoard = false;
  courses: Course[];
  private roles: string[];
  isLoggedIn = false;
  showProfessorBoard = false;
  username: string;

  constructor(private router:Router,private service:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.courseHome();
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

  courseHome(){
    let id= localStorage.getItem("pk_courseCode");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(["home"]);
  }

}
