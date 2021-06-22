import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
 import { Classroom } from '../../Model/Classroom';
 import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SpaceAssignmentService } from 'src/app/Service/space-assignment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentClass.html',
  styleUrls: ['./add.componentClass.css']
})
export  class AddComponentClass implements OnInit {

  
  classroom: Classroom= new Classroom();
  selected:String;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder,private toastr: ToastrService,private uploadService: SpaceAssignmentService) {
  }
  
  
ngOnInit(): void {

  }

  classForm = this.fb.group({
     classCapacity: ['',Validators.required],
     classAvailability: ['',Validators.required],
     classType: ['',Validators.required]
    });
 
 
  get capacity() { return this.classForm.get('classCapacity'); }
  get availability() { return this.classForm.get('classAvailability'); }
  get type() { return this.classForm.get('classType'); }
 
 Save(){
   if(this.classForm.valid){
    this.service.createClass(this.classroom,this.currentFile)
    .subscribe(data => {
      this.toastr.success('Se ha agregado un aula','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['listClassroom']);
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

