import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Course } from 'src/app/Model/Course';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']

  
})
export class EditCourseComponent implements OnInit {

  course :Course=new Course();
  constructor(private router:Router,private service:ServiceService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_idCourse");
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
      this.toastr.success('Se ha editado un curso','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(["listCourse"])
    })
  }

}