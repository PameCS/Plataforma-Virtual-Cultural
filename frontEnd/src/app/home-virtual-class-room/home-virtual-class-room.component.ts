import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Model/Course';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-home-virtual-class-room',
  templateUrl: './home-virtual-class-room.component.html',
  styleUrls: ['./home-virtual-class-room.component.css']
})
export class HomeVirtualClassRoomComponent implements OnInit {
  course :Course= new Course();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.courseHome();
  }

  courseHome(){
    let id= localStorage.getItem("pk_courseCode");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    })
  }
  
}
