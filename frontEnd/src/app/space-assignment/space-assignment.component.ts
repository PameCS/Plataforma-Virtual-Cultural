import { Component, OnInit } from '@angular/core';
import { SpaceAssignmentService } from 'src/app/Service/space-assignment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-space-assignment',
  templateUrl: './space-assignment.component.html',
  styleUrls: ['./space-assignment.component.css']
})
export class SpaceAssignmentComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private uploadService: SpaceAssignmentService) { }

  ngOnInit(): void { this.fileInfos = this.uploadService.getFiles(); }

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
