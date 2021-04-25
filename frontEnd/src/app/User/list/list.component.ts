import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {User} from 'src/app/Model/User';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  constructor(private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }

  Edit(user:User):void{
    localStorage.setItem("username",user.username.toString());
    this.router.navigate(["edit"]);
  }

  Delete(user: User)
  {
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.users=this.users.filter(u=>u!=user);
      this.toastr.success('Se ha eliminado el usuario','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }

}
