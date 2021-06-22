import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassRequest } from '../Model/ClassRequest';
import { TokenStorageService } from '../Service/token-storage.service';
@Component({
  selector: 'app-class-request',
  templateUrl: './class-request.component.html',
  styleUrls: ['./class-request.component.css']
})
export class ClassRequestComponent implements OnInit {
  classrequest: ClassRequest = new ClassRequest();
  constructor(private tokenStorageService: TokenStorageService,private router: Router, private service: ServiceService, private toastr: ToastrService, private fb: FormBuilder) { }
  isLoggedIn = false;
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken(); 
    if (!this.isLoggedIn)
    {
      this.toastr.error('Para poder solicitar aulas debe iniciar sesion como un usuario',
      'ALERTA',{timeOut: 4000,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['home']);
    }
  }
  classForm = this.fb.group({
    IdAulaSoli: ['', Validators.required],
    NomAulaSoli: ['', Validators.required],
    telAulaSoli: ['', Validators.required],
    emailAulaSoli: ['', Validators.required],
    motiAulaSoli: ['', Validators.required],
    HorAulaSoli: ['', Validators.required],
    DateSoli: ['', Validators.required],
    EquipoAulaSoli: ['', Validators.required]
  });

  get classId() { return this.classForm.get('IdAulaSoli'); }
  get fullNameSoli() { return this.classForm.get('NomAulaSoli'); }
  get tel() { return this.classForm.get('telAulaSoli'); }
  get email() { return this.classForm.get('emailAulaSoli'); }
  get reason() { return this.classForm.get('motiAulaSoli'); }
  get requestDate() { return this.classForm.get('DateSoli'); }
  get requestHour() { return this.classForm.get('HorAulaSoli'); }
  get equipment() { return this.classForm.get('EquipoAulaSoli'); }
  

  save() {
    if (this.classForm.valid) {
      this.service.createClassRoomRequest(this.classrequest)
        .subscribe(data => {
          this.toastr.success('Se ha agregado una solicitud de Aula', '¡Éxito!',
            { timeOut: 1500, progressBar: true, progressAnimation: 'increasing' });
          //this.router.navigate(['listClassroom']);
        });
    }
  }
}
