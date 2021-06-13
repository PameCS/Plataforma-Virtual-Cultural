import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course[];

  constructor(private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.getCourse()
    .subscribe(data => {
      this.courses = data;
    });
  }
  Edit(courses:Course):void{
    localStorage.setItem("PK_idCourse",courses.pk_idCourse.toString());
    this.router.navigate(["editCourse"]);
  }

  Delete(courses: Course)
  {
    this.service.deleteCourse(courses)
    .subscribe(data=>{
      this.courses=this.courses.filter(u=>u!=courses);
      this.toastr.success('Se ha eliminado un curso','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }

 

}
