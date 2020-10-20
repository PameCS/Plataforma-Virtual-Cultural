import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Course } from 'src/app/Model/Course';
import { Router } from '@angular/router';
import { Event } from 'src/app/Model/Event'
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event :Event=new Event();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_idEvent");
    this.service.getEventid(+id)
    .subscribe(data=>{
      this.event=data;
    })
  }

  Update(event:Event)
  {
    this.service.updateEvent(event)
    .subscribe(data=>{
      this.event=data;
      alert("Se actualizo con exito!!");
      this.router.navigate(["listEvent"])
    })
  }

}
