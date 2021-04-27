import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/Model/Advertisement';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

 
@Component({
  selector: 'app-add',
  templateUrl:'./add.componentAdvertisement.html',
  styleUrls: ['./add.componentAdvertisement.css']
})
export class AddComponentAdvertisement implements OnInit{

  
  Advertisement: Advertisement= new Advertisement();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
  }
  
  
ngOnInit(): void {

  }

  adForm = this.fb.group({
     Id: ['',Validators.required],
     descrip: ['',[Validators.pattern("[A-Za-zñÑáéíóúÁÉÍÓÚ0-9 ]{1,100}"),Validators.maxLength(100)]],
     
    });
 
  get Id() { return this.adForm.get('Id'); }
  get descrip() { return this.adForm.get('descrip'); }

 
  // tslint:disable-next-line: typedef
 Save(){
   if(this.adForm.valid){
    this.service.createAvertisement(this.Advertisement)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
      this.router.navigate(['listAd']);
    });
   }
 
}

}

