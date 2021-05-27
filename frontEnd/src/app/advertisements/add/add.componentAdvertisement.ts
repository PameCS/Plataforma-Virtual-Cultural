import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/Model/Advertisement';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/Model/Course';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Model/User';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { UserService } from 'src/app/Service/user.service';
 
@Component({
  selector: 'app-add',
  templateUrl:'./add.componentAdvertisement.html',
  styleUrls: ['./add.componentAdvertisement.css']
})
export class AddComponentAdvertisement implements OnInit{

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
  advertisement: Advertisement= new Advertisement();

  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder,private tokenStorageService: TokenStorageService,private Userservice: UserService) {
  }
  
  
ngOnInit(): void {
 
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

  adForm = this.fb.group({
    AdvertisementTitle: ['',Validators.required],
    AdvertisementDescrip: ['',[Validators.required]],
    AdvertisementState: ['',[Validators.required]]
    });
 
  get title() { return this.adForm.get('AdvertisementTitle'); }
  get description() { return this.adForm.get('AdvertisementDescrip'); }
  get state() { return this.adForm.get('AdvertisementState'); }

 
  // tslint:disable-next-line: typedef
 Save(){
   if(this.adForm.valid){
    this.service.createAvertisement(this.advertisement,this.course)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
    });
    this.router.navigate(['advertisementList']);
   }
 
}

current(ad: Advertisement): void{
  this.currentAd = ad;
}

addAdvertisement(){
  this.router.navigate(["addAd"])
}

Delete(Ads:Advertisement)
{
  this.service.deleteAdvertisement(Ads)
  .subscribe(data=>{
    this.Ads=this.Ads.filter(u=>u!=Ads);
    alert("Se elimino una anuncio!");
  });
  window.location.reload();
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

