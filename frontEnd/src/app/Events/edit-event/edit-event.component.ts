import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/Model/Event'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: Event = new Event();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.Edit();
  }
  eventForm = this.fb.group({
    Id: [''],
    eventName: ['', [Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"), Validators.maxLength(45)]],
    eventDate: ['', Validators.required],
    eventHour: ['', Validators.required],
    eventPlace: ['', [Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"), Validators.maxLength(45)]]
  });

  get name() { return this.eventForm.get('eventName'); }
  get date() { return this.eventForm.get('eventDate'); }
  get hour() { return this.eventForm.get('eventHour'); }
  get place() { return this.eventForm.get('eventPlace'); }

  Edit() {
    let id = localStorage.getItem("pk_idEvent");
    this.service.getEventid(+id)
      .subscribe(data => {
        this.event = data;
      })
  }

  Update(event: Event) {
    this.service.updateEvent(event)
      .subscribe(data => {
        this.event = data;
        alert("Se actualizo con exito!!");
        this.router.navigate(["listEvent"])
      })
  }

}
