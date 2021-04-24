import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  constructor(private router: Router, private service: ServiceService,private fb: FormBuilder) {
   }
  ngOnInit(): void {
  }

  courseForm = this.fb.group({
  
     courseName:['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]],
     courseMode: ['',Validators.required],
     startDateCourse: ['',Validators.required],
     finishDateCourse: ['',Validators.required],
     sheduleCourse: ['',Validators.required],
     professorCourse:['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]],
     quantityCourse: ['',Validators.required]
    });
  

  
  get name() { return this.courseForm.get('courseName'); }
  get mode() { return this.courseForm.get('courseMode'); }
  get startDate() { return this.courseForm.get('startDateCourse'); }
  get finishDate() { return this.courseForm.get('finishDateCourse'); }
  get shedule() { return this.courseForm.get('sheduleCourse'); }
  get professor() { return this.courseForm.get('professorCourse'); }
  get quantity() { return this.courseForm.get('quantityCourse'); }
 
 
  // tslint:disable-next-line: typedef
  Save(){
    if(this.courseForm.valid){
      this.service.createCourse(this.course)
      .subscribe(data => {
        alert('¡Se agregó con exito!');
        this.router.navigate(['listCourse']);
      });
    }
  }

}