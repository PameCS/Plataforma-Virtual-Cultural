import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event'
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Save(){
    this.service.createEvent(this.event)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
      this.router.navigate(['listEvent']);
    });
  }

}
