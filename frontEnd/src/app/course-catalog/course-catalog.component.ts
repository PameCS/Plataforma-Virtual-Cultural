import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {UserService } from '../Service/user.service';
import {Router} from '@angular/router';
import { TokenStorageService } from '../Service/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent implements OnInit {
  private roles: string[];
  courses: Course[];
  course :Course=new Course();
  isLoggedIn = false;
  showUser = false;
  errorMessage = '';
  currentCourse :Course=new Course();
  constructor(private service: UserService, private router: Router,private tokenStorageService: TokenStorageService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showUser = this.roles.includes('ROLE_USER');
    }
    this.service.getCourse()
    .subscribe(data => {
      this.courses = data;
    });
  }

  Enroll()
  {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
    const user = this.tokenStorageService.getUser();
    this.service.enrollToCourse(this.currentCourse,user.username)
    .subscribe(data=>{
      this.course=data;
      this.toastr.success('Se ha matriculado con exito','¡Éxito!',
      {timeOut: 1800,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['courseCatalog']);
    },
    err => {
      this.errorMessage = err.error.message;
      this.toastr.error(this.errorMessage,'¡Error!',
      {timeOut: 1800,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['courseCatalog']);
    })
  }
  }

  AddcurrentCourse(course: Course){
    this.currentCourse = course;
  }
}
