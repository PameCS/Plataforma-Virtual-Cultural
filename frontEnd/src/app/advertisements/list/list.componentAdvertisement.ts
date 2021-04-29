import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {Advertisement} from 'src/app/Model/Advertisement';
import {Router} from '@angular/router';
import { Course } from 'src/app/Model/Course';
import {UserService } from 'src/app/Service/user.service';
import { TokenStorageService } from 'src/app/Service/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.componentAdvertisement.html',
  styleUrls: ['./list.componentAdvertisement.css']
})
export class ListComponentAdvertisement implements OnInit {

  Ads: Advertisement[];
  private roles: string[];
  courses: Course[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
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
  }

  Edit(Ad:Advertisement):void{
    localStorage.setItem("pk_idAd",Ad.pk_AdCode.toString());
    this.router.navigate(["editAd"])
  }

  Delete(Ads:Advertisement)
  {
    this.service.deleteAdvertisement(Ads)
    .subscribe(data=>{
      this.Ads=this.Ads.filter(u=>u!=Ads);
      alert("Se elimino una anuncio!");
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(["home"]);
  }

}
