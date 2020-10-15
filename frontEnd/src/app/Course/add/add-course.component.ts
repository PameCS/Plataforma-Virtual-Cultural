import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  Save(){
    this.service.createCourse(this.course)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
      this.router.navigate(['listCourse']);
    });
  }

}