import { Component, OnInit } from '@angular/core';
import { CourseRequest } from '../Model/CourseRequest';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../Service/token-storage.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  CR: CourseRequest = new CourseRequest();
  constructor(private tokenStorageService: TokenStorageService,private router: Router, private service: ServiceService, private toastr: ToastrService, private fb: FormBuilder) { }
  isLoggedIn = false;
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken(); 
    if (!this.isLoggedIn)
    {
      this.toastr.error('Para poder solicitar cursos debe iniciar sesion como un usuario',
      'ALERTA',{timeOut: 4000,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['home']);
    }
  }

  classForm = this.fb.group({
    NomCurSoli: ['', Validators.required],
    NomSoli: ['', Validators.required],
    telSoli: ['', Validators.required],
    emailSoli: ['', Validators.required],
    motiSoli: ['', Validators.required],
    capaciSoli: ['', Validators.required],
    modoSoli: ['', Validators.required],
    StartDateSoli: ['', Validators.required],
    finishDateSoli: ['', Validators.required]
  });

  get fullName() { return this.classForm.get('NomSoli'); }
  get tel() { return this.classForm.get('telSoli'); }
  get email() { return this.classForm.get('emailSoli'); }
  get courseName() { return this.classForm.get('NomCurSoli'); }
  get startDate() { return this.classForm.get('StartDateSoli'); }
  get finishDate() { return this.classForm.get('finishDateSoli'); }
  get mode() { return this.classForm.get('modoSoli'); }
  get studentQuantity() { return this.classForm.get('capaciSoli'); }
  get motivo() { return this.classForm.get('motiSoli'); }

  save() {
    if (this.classForm.valid) {
      this.service.createCourseRequest(this.CR)
        .subscribe(data => {
          this.toastr.success('Se ha agregado una solicitud de curso', '¡Éxito!',
            { timeOut: 1500, progressBar: true, progressAnimation: 'increasing' });
          //this.router.navigate(['listClassroom']);
        });
    }
  }
}
