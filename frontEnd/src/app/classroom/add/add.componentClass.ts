import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
 import { Classroom } from '../../Model/Classroom';
 import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentClass.html',
  styleUrls: ['./add.componentClass.css']
})
export  class AddComponentClass implements OnInit {

  
  classroom: Classroom= new Classroom();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder,private toastr: ToastrService) {
  }
  
  
ngOnInit(): void {

  }

  classForm = this.fb.group({
     classCapacity: ['',Validators.required],
     classAvailability: ['',Validators.required],
     classType: ['',Validators.required]
    });
 
 
  get capacity() { return this.classForm.get('classCapacity'); }
  get availability() { return this.classForm.get('classAvailability'); }
  get type() { return this.classForm.get('classType'); }
 
 Save(){
   if(this.classForm.valid){
    this.service.createClass(this.classroom)
    .subscribe(data => {
      this.toastr.success('Se ha agregado un aula','¡Éxito!',
        {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(['listClassroom']);
    });
   }
 
}

}

