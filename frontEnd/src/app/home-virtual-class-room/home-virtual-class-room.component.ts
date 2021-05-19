import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Model/Course';
import { UserService } from '../Service/user.service';
import { SpaceAssignmentService } from '../Service/space-assignment.service';
import { TokenStorageService } from '../Service/token-storage.service';
import { User } from '../Model/User';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-virtual-class-room',
  templateUrl: './home-virtual-class-room.component.html',
  styleUrls: ['./home-virtual-class-room.component.css']
})
export class HomeVirtualClassRoomComponent implements OnInit {
 

  signOut = faSignOutAlt;
  course :Course= new Course();
  showUserBoard = false;
  courses: Course[];
  private roles: string[];
  isLoggedIn = false;
  showProfessorBoard = false;
  students: User[];
  fileInfos: Observable<any>;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  constructor(private router:Router,private service:UserService,private tokenStorageService: TokenStorageService, private FileService:SpaceAssignmentService) { }

  ngOnInit(): void {
    this.courseHome();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
   
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showProfessorBoard  = this.roles.includes('ROLE_PROFESSOR');
      this.showUserBoard  = this.roles.includes('ROLE_USER');
      this.service.getUserCourses(user)
    .subscribe(data => {
      this.courses = data;
    });
    this.FileService.getFiles()
    .subscribe(data => {
      this.fileInfos = data;
    });
    }
   
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.FileService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.FileService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'No se pudo subir el archivo!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
    window.location.reload();
    window.location.reload();
  }

  courseHome(){
    let id= localStorage.getItem("pk_idCourse");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    });
  }

  refresh(course: Course){
    localStorage.setItem("pk_idCourse",course.pk_idCourse.toString());
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  studentList(){
    let id= localStorage.getItem("pk_idCourse");
    this.service.getStudentList(+id)
    .subscribe(data => {
      this.students = data;
    });
    this.router.navigate(["studentList"]);
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["home"]);
  }

  return(): void {
    this.router.navigate(["virtualClassroom"]);
  }

  attendance(): void{
    this.service.exportExcelStudents(this.course).subscribe( x =>{
      const blob = new Blob([x],{type:'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
       
      if(window.navigator && window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'Estudiantes.xlsx';
      link.dispatchEvent(new MouseEvent('click',{bubbles: true,cancelable:true,view:window}));
    
      setTimeout(function(){
       window.URL.revokeObjectURL(data);
       link.remove();
      },100);
    });
  }

  

}
