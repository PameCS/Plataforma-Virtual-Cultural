import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import {ServiceService } from '../../Service/service.service';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Model/User';
import { SpaceAssignmentService } from 'src/app/Service/space-assignment.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  users: User[];
  selected:String;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  constructor(private router: Router, private service: ServiceService,private fb: FormBuilder,private toastr: ToastrService,private uploadService: SpaceAssignmentService) {
   }
   
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.service.getProfessorUsers()
    .subscribe(data => {
      this.users = data;
    });
  }

  courseForm = this.fb.group({
  
     courseName:['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,45}"),Validators.maxLength(45)]],
     courseMode: ['',Validators.required],
     startDateCourse: ['',Validators.required],
     finishDateCourse: ['',Validators.required],
     sheduleCourse: ['',Validators.required],
     quantityCourse: ['',Validators.required],
     professor: ['']
    });
  

  
  get name() { return this.courseForm.get('courseName'); }
  get mode() { return this.courseForm.get('courseMode'); }
  get startDate() { return this.courseForm.get('startDateCourse'); }
  get finishDate() { return this.courseForm.get('finishDateCourse'); }
  get shedule() { return this.courseForm.get('sheduleCourse'); }
  get professor() { return this.courseForm.get('professor');  }
  get quantity() { return this.courseForm.get('quantityCourse'); }


  // tslint:disable-next-line: typedef
  Save(){
    if(this.courseForm.valid){
      this.service.createCourse(this.course,this.currentFile)
      .subscribe(data => {
        this.toastr.success('Se ha agregado un curso','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
        this.router.navigate(['listCourse']);
      });
    }
  }

  changeProfessor(e) {
    this.professor.setValue(e.target.value, {
      onlySelf: true
    })
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