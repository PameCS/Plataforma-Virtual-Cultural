import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {Advertisement} from 'src/app/Model/Advertisement';
import {Router} from '@angular/router';
import { Course } from 'src/app/Model/Course';
import {UserService } from 'src/app/Service/user.service';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { User } from 'src/app/Model/User';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.componentAdvertisement.html',
  styleUrls: ['./list.componentAdvertisement.css']
})
export class ListComponentAdvertisement implements OnInit {
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

  constructor(private service: ServiceService, private router: Router,private tokenStorageService: TokenStorageService,private Userservice: UserService) { }

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
    this.Userservice.getCourseid(+id)
    .subscribe(data=>{
      this.course=data;
    });
  }

  Edit(Ad:Advertisement):void{
    localStorage.setItem("pk_id",Ad.pk_id.toString());
    this.router.navigate(["editAd"])
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
    this.router.navigate(["HomeVirtualClassRoom"]);
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
