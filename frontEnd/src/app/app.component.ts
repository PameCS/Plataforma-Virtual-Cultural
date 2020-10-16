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
  Edit(){
    this.router.navigate(['edit']);

  }
}