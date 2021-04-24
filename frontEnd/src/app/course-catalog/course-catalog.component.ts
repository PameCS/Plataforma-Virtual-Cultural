import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent implements OnInit {
  courses: Course[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCourse()
    .subscribe(data => {
      this.courses = data;
    });
  }

}
