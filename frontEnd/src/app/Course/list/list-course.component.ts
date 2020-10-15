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

}
