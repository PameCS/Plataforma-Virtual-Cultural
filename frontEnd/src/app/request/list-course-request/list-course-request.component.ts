import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ServiceService } from '../../Service/service.service';
import {CourseRequest} from 'src/app/Model/CourseRequest';

@Component({
  selector: 'app-list-course-request',
  templateUrl: './list-course-request.component.html',
  styleUrls: ['./list-course-request.component.css']
})
export class ListCourseRequestComponent implements OnInit {

  coursesrequest: CourseRequest[];
  constructor(private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getCourseRequest()
    .subscribe(data=>{
      this.coursesrequest=data;
    })
  }

  Accept(courserequest: CourseRequest)
  {

  }

  Reject(courserequest: CourseRequest)
  {
    
  }
}
