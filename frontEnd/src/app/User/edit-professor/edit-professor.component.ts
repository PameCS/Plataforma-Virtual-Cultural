import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-professor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css']
})
export class EditProfessorComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder,private toastr: ToastrService) { }
  userForm = this.fb.group({
    Username: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,40}"), Validators.maxLength(40)]],
    UserlastName: ['', [Validators.required, Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,45}"), Validators.maxLength(45)]],
  });

  get name() { return this.userForm.get('Username'); }
  get lastName() { return this.userForm.get('UserlastName'); }
 
  ngOnInit(): void {
    this.Edit();
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
        this.router.navigate(["professorList"])
      })
  }

}
