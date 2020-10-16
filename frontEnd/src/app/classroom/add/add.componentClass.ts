import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
 import { Classroom } from '../../Model/Classroom';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentClass.html',
  styleUrls: ['./add.componentClass.css']
})
export  class AddComponentClass implements OnInit {

  
  classroom: Classroom= new Classroom();
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
  }

 // tslint:disable-next-line: typedef
 Save(){
  this.service.createClass(this.classroom)
  .subscribe(data => {
    alert('¡Se agregó con exito!');
    this.router.navigate(['listClassroom']);
  });
}

}

