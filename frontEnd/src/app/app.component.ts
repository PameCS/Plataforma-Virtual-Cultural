import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'centro-cultural';
  constructor(private router: Router){}

  // tslint:disable-next-line: typedef
  List(){
    this.router.navigate(['list']);
  }

  ListClassroom(){
    this.router.navigate(['listClassroom']);
  }
  ListCourse(){
    this.router.navigate(['listCourse']);
  }
  ListEvent(){
    this.router.navigate(['listEvent']);
  }
  ListAdvertisement(){
    this.router.navigate(['listAd']);
  }
  // tslint:disable-next-line: typedef
  Add(){
    this.router.navigate(['add']);
  }
  AddClass(){
    this.router.navigate(['addClass']);
  }
  AddCourse(){
    this.router.navigate(['addCourse']);
  }
  AddAdvertisement(){
    this.router.navigate(['addAd']);
  }
  AddEvent(){
    this.router.navigate(['addEvent'])
  }
  Edit(){
    this.router.navigate(['edit']);

  }
  EditClass(){
    this.router.navigate(['editClass']);

  }
  EditCourse(){
    this.router.navigate(['editCourse']);

  }
  EditEvent(){
    this.router.navigate(['editEvent']);

  }
  EditAdvertisement(){
    this.router.navigate(['editAd']);
  }

}