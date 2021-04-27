import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {Advertisement} from 'src/app/Model/Advertisement';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.componentAdvertisement.html',
  styleUrls: ['./list.componentAdvertisement.css']
})
export class ListComponentAdvertisement implements OnInit {

  Ad: Advertisement[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAdvertisement()
    .subscribe(data => {
      this.Ad = data;
    });
  }

  Edit(Ad:Advertisement):void{
    localStorage.setItem("pk_idAd",Ad.pk_AdCode.toString());
    this.router.navigate(["editAd"])
  }

  Delete(Ad:Advertisement)
  {
    this.service.deleteAdvertisement(Ad)
    .subscribe(data=>{
      this.Ad=this.Ad.filter(u=>u!=Ad);
      alert("Se elimino una anuncio!");
    })
  }

}
