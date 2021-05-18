import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/Model/Advertisement';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/Model/Course';

 
@Component({
  selector: 'app-add',
  templateUrl:'./add.componentAdvertisement.html',
  styleUrls: ['./add.componentAdvertisement.css']
})
export class AddComponentAdvertisement implements OnInit{

  
  advertisement: Advertisement= new Advertisement();
  course : Course = new Course();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
  }
  
  
ngOnInit(): void {
  let id= localStorage.getItem("pk_idCourse");
  this.service.getCourseid(+id)
  .subscribe(data=>{
    this.course=data;
  });

  }

  adForm = this.fb.group({
    AdvertisementTitle: ['',Validators.required],
    AdvertisementDescrip: ['',[Validators.required]],
    AdvertisementState: ['',[Validators.required]]
    });
 
  get title() { return this.adForm.get('AdvertisementTitle'); }
  get description() { return this.adForm.get('AdvertisementDescrip'); }
  get state() { return this.adForm.get('AdvertisementState'); }

 
  // tslint:disable-next-line: typedef
 Save(){
   if(this.adForm.valid){
    this.service.createAvertisement(this.advertisement,this.course)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
    });
    this.router.navigate(['advertisementList']);
   }
 
}

}

