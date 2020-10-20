import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events: Event[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEvent()
    .subscribe(data => {
      this.events = data;
    });
  }
  Edit(events:Event):void{
    localStorage.setItem("pk_idEvent",events.pk_idEvent.toString());
    this.router.navigate(["editEvent"]);
  }

  Delete(events: Event)
  {
    this.service.deleteEvent(events)
    .subscribe(data=>{
      this.events=this.events.filter(u=>u!=events);
      alert("Se elimino un evento!");
    })
  }

}
