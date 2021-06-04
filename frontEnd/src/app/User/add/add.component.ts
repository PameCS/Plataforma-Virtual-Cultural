import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenStorageService } from 'src/app/Service/token-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  private roles: string[];
  isLoggedIn = false;
  showSuperAdmin = false;
  showAdmin = false;
  username: string;

  
  constructor(private router:Router,private authService: AuthService,private tokenStorageService: TokenStorageService,private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdmin= this.roles.includes('ROLE_ADMIN');
      this.showSuperAdmin  = this.roles.includes('ROLE_SUPER_ADMIN');
      this.username = user.username;
    }
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success('Se ha agregado un usuario','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
        if(this.roles.includes('ROLE_ADMIN')){
          this.router.navigate(["professorList"]);
        }else{
          this.router.navigate(["list"]);
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
