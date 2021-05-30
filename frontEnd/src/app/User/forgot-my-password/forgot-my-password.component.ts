import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-my-password',
  templateUrl: './forgot-my-password.component.html',
  styleUrls: ['./forgot-my-password.component.css']
})
export class ForgotMyPasswordComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private service: ServiceService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  passwordchangeform = this.fb.group({
    useridRecover: ['', Validators.required],
    passRecover: ['', Validators.required],

  });

  get password() { return this.passwordchangeform.get('passRecover'); }
  get username() { return this.passwordchangeform.get('useridRecover'); }

  changepassword(user: User){
    
    this.service.updateUser(user)
    .subscribe(data => {
      this.user = data;
      this.toastr.success('Se ha actualizado el usuario con la nueva contraseña','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(["login"])
    })
  }

  retrieveUserTochangepassword(){
    let id = localStorage.getItem("username");
    this.service.getUserId(+id)
      .subscribe(data => {
        this.user = data;
      })
  }
}
