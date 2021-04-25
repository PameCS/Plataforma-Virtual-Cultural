import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {Classroom} from 'src/app/Model/Classroom';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.componentClass.html',
  styleUrls: ['./list.componentClass.css']
})
export class ListComponentClass implements OnInit {

  clases: Classroom[];
  constructor(private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getClass()
    .subscribe(data => {
      this.clases = data;
    });
  }

  Edit(clases:Classroom):void{
    localStorage.setItem("pk_idClass",clases.pk_idClass.toString());
    this.router.navigate(["editClass"])
  }

  Delete(clases:Classroom)
  {
    this.service.deleteClass(clases)
    .subscribe(data=>{
      this.clases=this.clases.filter(u=>u!=clases);
      this.toastr.success('Se ha eliminado un aula','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }

}
