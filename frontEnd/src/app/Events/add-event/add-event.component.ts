import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event'
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  constructor(private router: Router, private service: ServiceService,private fb: FormBuilder) {
   }

  ngOnInit(): void {
  }

  eventForm = this.fb.group({
     Id: ['',Validators.required],
     eventName: ['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]],
     eventDate: ['',Validators.required],
     eventHour: ['',Validators.required],
     eventPlace: ['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]]
    });
  
  get Id() { return this.eventForm.get('Id'); }
  get name() { return this.eventForm.get('eventName'); }
  get date() { return this.eventForm.get('eventDate'); }
  get hour() { return this.eventForm.get('eventHour'); }
  get place() { return this.eventForm.get('eventPlace'); }

  Save(){
    if(this.eventForm.valid){
      this.service.createEvent(this.event)
      .subscribe(data => {
        alert('¡Se agregó con exito!');
        this.router.navigate(['listEvent']);
      });
    }
    }
}
