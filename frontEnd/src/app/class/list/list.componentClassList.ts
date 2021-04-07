import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {Classroom} from 'src/app/Model/Classroom';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.componentClassList.html',
  styleUrls: ['./list.componentClassList.css']
})
export class ListComponentClassList implements OnInit {

  clases: Classroom[];
  constructor(private service: ServiceService, private router: Router) { }

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
      alert("Se elimino una clase!");
    })
  }

}
