import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event';
import {UserService } from '../../Service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events: Event[];
  content: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getEvent()
    .subscribe(data => {
      this.events = data;
    }, err => {
      this.content = JSON.parse(err.error).message;
    }
    );
  }
  Edit(events:Event):void{
    localStorage.setItem("pk_idEvent",events.pk_idEvent.toString());
    this.router.navigate(["editEvent"]);
  }

  Delete(events: Event)
  {
    this.userService.deleteEvent(events)
    .subscribe(data=>{
      this.events=this.events.filter(u=>u!=events);
      alert("Se elimino un evento!");
    })
  }

}
