import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Model/Course';
import { UserService } from '../Service/user.service';
import { TokenStorageService } from '../Service/token-storage.service';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { User } from '../Model/User';
import { Attendance } from '../Model/Attendance';


@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  signOut = faSignOutAlt;
  course :Course= new Course();
  showUserBoard = false;
  courses: Course[];
  private roles: string[];
  isLoggedIn = false;
  showProfessorBoard = false;
  students: Attendance[];


  constructor(private router:Router,private service:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.courseHome();
    this.studentList();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showProfessorBoard  = this.roles.includes('ROLE_PROFESSOR');
      this.showUserBoard  = this.roles.includes('ROLE_USER');
      this.service.getUserCourses(user)
    .subscribe(data => {
      this.courses = data;
    });
    }
  }
  
  studentList(){
    let id= localStorage.getItem("pk_courseCode");
    this.service.getCourseAttendance(+id)
    .subscribe(data => {
      this.students = data;
    });

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
    this.router.navigate(["home"]);
  }

  return(): void{
    let id= localStorage.getItem("pk_idCourse");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    })
    this.router.navigate(["HomeVirtualClassRoom"]);
  }

}
