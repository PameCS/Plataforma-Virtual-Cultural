import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Advertisement } from 'src/app/Model/Advertisement';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl:'./edit.componentAdvertisement.html',
  styleUrls: ['./edit.componentAdvertisement.css']
})
export class EditComponentAdvertisement implements OnInit {

  Advertisement :Advertisement = new Advertisement();
  constructor(private router:Router,private service:ServiceService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id= localStorage.getItem("pk_idAd");
    this.service.getAdvertisementid(+id)
    .subscribe(data=>{
      this.Advertisement=data;
    })
  }

  Update(Advertisement: Advertisement)
  {
    this.service.updateAdvertisement(Advertisement)
    .subscribe(data=>{
      this.Advertisement=data;
      this.toastr.success('Se ha actualizado un aviso','¡Éxito!',
      {timeOut: 1500,progressBar:true,progressAnimation:'increasing'});
      this.router.navigate(["listAdvertisement"])
    })
  }

}