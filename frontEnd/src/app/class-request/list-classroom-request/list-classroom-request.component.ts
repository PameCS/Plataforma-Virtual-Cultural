import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ServiceService } from '../../Service/service.service';
import {ClassRequest} from 'src/app/Model/ClassRequest';
import { TokenStorageService } from 'src/app/Service/token-storage.service';

@Component({
  selector: 'app-list-classroom-request',
  templateUrl: './list-classroom-request.component.html',
  styleUrls: ['./list-classroom-request.component.css']
})
export class ListClassroomRequestComponent implements OnInit {
   //Declaro las variables que voy a usar para almacenar la lista de requestCourse
  //Tambien se declaran las variables para almacenar los roles y las varibles que almacenan que tipo
  //de usuario esta registrado, ademas de la variable que verifica se este logeado
  
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  showProfessorBoard = false;
  showUserBoard = false;
  username: string;
  classroomsrequests: ClassRequest[];

  constructor(private tokenStorageService: TokenStorageService,private service: ServiceService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken(); //Extrae el token que almacena si esta logeado o no
    if (this.isLoggedIn) { //Verifica que haya un usuario logeado
      const user = this.tokenStorageService.getUser(); //recupera el usuario
      this.roles = user.roles; //Extrae el rol del usuario logeado
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN'); //Asigna true o false si es el rol correspondiente
      this.showSuperAdminBoard  = this.roles.includes('ROLE_SUPER_ADMIN');//Asigna true o false si es el rol correspondiente
      this.showProfessorBoard  = this.roles.includes('ROLE_PROFESSOR');//Asigna true o false si es el rol correspondiente
      this.showUserBoard  = this.roles.includes('ROLE_USER');//Asigna true o false si es el rol correspondiente
      this.username = user.username; //Debo verificar si me sirve esta varible en este modulo
      this.service.getClassRoomRequest(this.username) //Recibe una lista de todas las clases que tengan como estadio un "Pendiente"
      .subscribe(data=>{
        this.classroomsrequests=data;
      })
   
    }

  
  }
  Accept(classroomrequest: ClassRequest)
  {
    classroomrequest.status='Aceptada'
    this.service.UpdateStateClassRoomRequest(classroomrequest)
    .subscribe(data=>{
      this.classroomsrequests=this.classroomsrequests.filter(u=>u!=classroomrequest);
      this.toastr.success('Se ha aceptado la solicitud  de un aula','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }

  Reject(classroomrequest: ClassRequest)
  {
    classroomrequest.status='Rechazada'
    this.service.UpdateStateClassRoomRequest(classroomrequest)
    .subscribe(data=>{
      this.classroomsrequests=this.classroomsrequests.filter(u=>u!=classroomrequest);
      this.toastr.success('Se ha rechazado la solicitud de un aula','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
    })
  }
}
