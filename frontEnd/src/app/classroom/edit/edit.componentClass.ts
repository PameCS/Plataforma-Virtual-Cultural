import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Classroom } from 'src/app/Model/Classroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentClass.html',
  styleUrls: ['./edit.componentClass.css']
})
export class EditComponentClass implements OnInit {

  classroom :Classroom=new Classroom();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_idClass");
    this.service.getClassid(+id)
    .subscribe(data=>{
      this.classroom=data;
    })
  }

  Update(classroom: Classroom)
  {
    this.service.updateClass(classroom)
    .subscribe(data=>{
      this.classroom=data;
      alert("Se actualizo con exito!!");
      this.router.navigate(["listClassroom"])
    })
  }

}