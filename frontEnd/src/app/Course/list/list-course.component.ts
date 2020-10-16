import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCourse()
    .subscribe(data => {
      this.courses = data;
    });
  }
  Edit(courses:Course):void{
    localStorage.setItem("pk_courseCode",courses.pk_courseCode.toString());
    this.router.navigate(["editCourse"]);
  }

  Delete(courses: Course)
  {
    this.service.deleteCourse(courses)
    .subscribe(data=>{
      this.courses=this.courses.filter(u=>u!=courses);
      alert("Se elimino un curso!");
    })
  }


}
