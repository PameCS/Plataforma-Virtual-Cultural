import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../Service/service.service';
import {User} from 'src/app/Model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }

}
