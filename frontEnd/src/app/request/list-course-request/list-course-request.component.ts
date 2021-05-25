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
    //Los objetos de courserequest no agarran bien el id
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
    console.log(courserequest.courseName);
    this.service.deleteCourseRequest(courserequest)
    .subscribe(data=>{
      this.coursesrequest=this.coursesrequest.filter(u=>u!=courserequest);
      this.toastr.success('Se ha eliminado un solicitud de curso','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }
}
