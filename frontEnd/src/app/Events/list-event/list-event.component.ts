import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event';
import {UserService } from '../../Service/user.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events: Event[];
  content: string;
  constructor(private userService: UserService, private router: Router,private toastr: ToastrService) { }

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
      this.toastr.success('Se ha eliminado un evento','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }

}
