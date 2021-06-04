import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event'
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  constructor(private router: Router, private service: ServiceService,private fb: FormBuilder,private toastr: ToastrService) {
   }

  ngOnInit(): void {
  }

  eventForm = this.fb.group({
     eventName: ['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]],
     eventDate: ['',Validators.required],
     eventHour: ['',Validators.required],
     eventPlace: ['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]]
    });
  
  get name() { return this.eventForm.get('eventName'); }
  get date() { return this.eventForm.get('eventDate'); }
  get hour() { return this.eventForm.get('eventHour'); }
  get place() { return this.eventForm.get('eventPlace'); }

  Save(){
    if(this.eventForm.valid){
      this.service.createEvent(this.event)
      .subscribe(data => {
        this.toastr.success('Se ha agregado un evento','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
        this.router.navigate(['listEvent']);
      });
    }
    }
}
