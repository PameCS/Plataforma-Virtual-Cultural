import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User = new User();
  private roles: string[];
  isLoggedIn = false;
  showAdmin = false;
  showSuperAdmin = false;
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder,private toastr: ToastrService,private tokenStorageService: TokenStorageService) { }
  userForm = this.fb.group({
    Username: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,40}"), Validators.maxLength(40)]],
    UserlastName: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,45}"), Validators.maxLength(45)]],
    Usertype: ['']
  });

  get password() { return this.userForm.get('Userpassword'); }
  get name() { return this.userForm.get('Username'); }
  get lastName() { return this.userForm.get('UserlastName'); }
  get type() { return this.userForm.get('Usertype'); }

  ngOnInit(): void {
    this.Edit();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdmin = this.roles.includes('ROLE_ADMIN');
      this.showSuperAdmin  = this.roles.includes('ROLE_SUPER_ADMIN');
    }
  }

  Edit() {
    let id = localStorage.getItem("username");
    this.service.getUserId(+id)
      .subscribe(data => {
        this.user = data;
      })
  }

  Update(user: User) {
    this.service.updateUser(user)
      .subscribe(data => {
        this.user = data;
        this.toastr.success('Se ha actualizado el usuario','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
        if(this.roles.includes('ROLE_ADMIN')){
          this.router.navigate(["professorList"]);
        }else{
          this.router.navigate(["list"]);
        }
      })
     
  }

}
