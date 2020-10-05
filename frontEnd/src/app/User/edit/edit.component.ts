import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user :User=new User();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_idUser");
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    })
  }

  Update(user:User)
  {
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user=data;
      alert("Se actualizo con exito!!");
      this.router.navigate(["list"])
    })
  }

}
