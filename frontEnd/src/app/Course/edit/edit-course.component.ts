import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Course } from 'src/app/Model/Course';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']

  
})
export class EditCourseComponent implements OnInit {

  course :Course=new Course();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_courseCode");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }

  Update(course:Course)
  {
    this.service.updateCourse(course)
    .subscribe(data=>{
      this.course=data;
      alert("Se actualizo con exito!!");
      this.router.navigate(["listCourse"])
    })
  }

}