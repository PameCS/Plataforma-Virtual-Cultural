import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Model/Course';
import { User } from '../Model/User';
import { TokenStorageService } from '../Service/token-storage.service';
import { UserService } from '../Service/user.service';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  signOut = faSignOutAlt;
  course :Course= new Course();
  showUserBoard = false;
  courses: Course[];
  private roles: string[];
  isLoggedIn = false;
  showProfessorBoard = false;
  students: User[];

  constructor(private router:Router,private service:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.studentList();
    this.courseHome();
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
    let id= localStorage.getItem("pk_idCourse");
    this.service.getStudentList(+id)
    .subscribe(data => {
      this.students = data;
    });
    this.router.navigate(["studentList"]);
  }

  courseHome(){
    let id= localStorage.getItem("pk_courseCode");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }

  refresh(course: Course){
    localStorage.setItem("pk_idCourse",course.pk_idCourse.toString());
    this.router.navigate(["HomeVirtualClassRoom"]);
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

  attendance(): void{
    this.service.exportExcelStudents(this.course).subscribe( x =>{
      const blob = new Blob([x],{type:'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
       
      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'Estudiantes.xlsx';
      link.dispatchEvent(new MouseEvent('click',{bubbles: true,cancelable:true,view:window}));
    
      setTimeout(function(){
       window.URL.revokeObjectURL(data);
       link.remove();
      },100);
    });
  }
}
