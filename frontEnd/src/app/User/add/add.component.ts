import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { User } from '../../Model/User';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
   }

   userForm = this.fb.group({
      Id: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(9),Validators.pattern("[0-9]")]],
      Userpassword: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$') ]],
      Username: ['',[Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,40}"),Validators.maxLength(40)]],
      UserlastName: ['',[Validators.required,Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,45}"),Validators.maxLength(45)]],
      Usertype: ['',[Validators.required]]
     });

   
   get Id() { return this.userForm.get('Id'); }
   get password() { return this.userForm.get('Userpassword'); }
   get name() { return this.userForm.get('Username'); }
   get lastName() { return this.userForm.get('UserlastName'); }
   get type() { return this.userForm.get('Usertype'); }
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  Save(){
    if(this.userForm.valid){
    this.service.createUser(this.user)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
      this.router.navigate(['list']);
    });
    }
  }


}
