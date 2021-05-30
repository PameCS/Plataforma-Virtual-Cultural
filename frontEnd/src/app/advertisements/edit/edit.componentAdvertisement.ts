import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Advertisement } from 'src/app/Model/Advertisement';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/Model/Course';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Model/User';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-edit',
  templateUrl:'./edit.componentAdvertisement.html',
  styleUrls: ['./edit.componentAdvertisement.css']
})
export class EditComponentAdvertisement implements OnInit {

  Advertisement :Advertisement = new Advertisement();
  signOut = faSignOutAlt;
  Ads: Advertisement[];
  currentAd: Advertisement = new Advertisement();
  private roles: string[];
  courses: Course[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
  students: User[];
  course :Course= new Course();

  constructor(private router:Router,private service:ServiceService,private toastr: ToastrService,private tokenStorageService: TokenStorageService,private Userservice: UserService) { }

  ngOnInit(): void {
    this.Edit();
    this.service.getAdvertisement()
    .subscribe(data => {
      this.Ads = data;
    });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSuperAdminBoard  = this.roles.includes('ROLE_SUPER_ADMIN');
      this.showProfessorBoard  = this.roles.includes('ROLE_PROFESSOR');
      this.showUserBoard  = this.roles.includes('ROLE_USER');
      this.username = user.username;
      this.Userservice.getUserCourses(user)
    .subscribe(data => {
      this.courses = data;
    });
    }
  
    let id= localStorage.getItem("pk_idCourse");
    this.service.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    });
  }

  Edit(){
    let id= localStorage.getItem("pk_id");
    this.service.getAdvertisementid(+id)
    .subscribe(data=>{
      this.Advertisement=data;
    })
  }

  Update(Advertisement: Advertisement)
  {
    this.service.updateAdvertisement(Advertisement)
    .subscribe(data=>{
      this.Advertisement=data;
      this.toastr.success('Se ha actualizado un aviso','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(["listAdvertisement"])
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(["home"]);
  }
  
  
  return(): void {
    this.router.navigate(["advertisementList"]);
  }
  
  attendance(): void{
    this.Userservice.exportExcelStudents(this.course).subscribe( x =>{
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
  
  studentList(){
    this.router.navigate(["studentList"]);
  }
  

}