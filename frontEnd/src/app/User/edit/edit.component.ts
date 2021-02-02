import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) { }
  userForm = this.fb.group({
<<<<<<< Updated upstream
    Id:[''],
=======
    Id : [''],
>>>>>>> Stashed changes
    Userpassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$')]],
    Username: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,40}"), Validators.maxLength(40)]],
    UserlastName: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,45}"), Validators.maxLength(45)]],
    Usertype: ['', [Validators.required]]
  });

  get password() { return this.userForm.get('Userpassword'); }
  get name() { return this.userForm.get('Username'); }
  get lastName() { return this.userForm.get('UserlastName'); }
  get type() { return this.userForm.get('Usertype'); }

  ngOnInit(): void {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("pk_idUser");
    this.service.getUserId(+id)
      .subscribe(data => {
        this.user = data;
      })
  }

  Update(user: User) {
    this.service.updateUser(user)
      .subscribe(data => {
        this.user = data;
        alert("Se actualizo con exito el usuario!!");
        this.router.navigate(["list"])
      })
  }

}
