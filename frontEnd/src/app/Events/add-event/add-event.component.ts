import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Model/Event'
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SpaceAssignmentService } from 'src/app/Service/space-assignment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  selected:String;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  constructor(private router: Router, private service: ServiceService,private fb: FormBuilder,private toastr: ToastrService,private uploadService: SpaceAssignmentService) {
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
      this.service.createEvent(this.event,this.currentFile)
      .subscribe(data => {
        this.toastr.success('Se ha agregado un evento','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
        this.router.navigate(['listEvent']);
      });
   }
    }

    selectFile(event) {
      this.selectedFiles = event.target.files;
    }
    
    upload() {
      this.progress = 0;
    
      this.currentFile = this.selectedFiles.item(0);
      this.uploadService.upload(this.currentFile).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        err => {
          this.progress = 0;
          this.message = 'No se pudo subir el archivo!';
          this.currentFile = undefined;
        });
    
      this.selectedFiles = undefined;
    }
}
