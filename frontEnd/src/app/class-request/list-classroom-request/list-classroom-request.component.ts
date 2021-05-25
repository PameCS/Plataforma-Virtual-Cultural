import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ServiceService } from '../../Service/service.service';
import {ClassRequest} from 'src/app/Model/ClassRequest';

@Component({
  selector: 'app-list-classroom-request',
  templateUrl: './list-classroom-request.component.html',
  styleUrls: ['./list-classroom-request.component.css']
})
export class ListClassroomRequestComponent implements OnInit {
  classroomsrequests: ClassRequest[];
  constructor(private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getClassRoomRequest()
    .subscribe(data=>{
      this.classroomsrequests=data;
    })
  }
  Accept(classroomrequest: ClassRequest)
  {

  }

  Reject(classroomrequest: ClassRequest)
  {
    
  }
}
