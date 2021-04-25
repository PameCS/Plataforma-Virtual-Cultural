import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Classroom } from 'src/app/Model/Classroom';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentClass.html',
  styleUrls: ['./edit.componentClass.css']
})
export class EditComponentClass implements OnInit {

  classroom :Classroom=new Classroom();
  constructor(private router:Router,private service:ServiceService,private toastr: ToastrService) { }

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
      this.toastr.success('Se ha actualizado un aula','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(["listClassroom"])
    })
  }

}