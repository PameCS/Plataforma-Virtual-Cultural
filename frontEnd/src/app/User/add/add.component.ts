import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { User } from '../../Model/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: User = new User();
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  Save(){
    this.service.createUser(this.user)
    .subscribe(data => {
      alert('¡Se agregó con exito!');
      this.router.navigate(['list']);
    });
  }

}
