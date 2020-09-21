import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'centro-cultural';

  users = [
    {name: 'Luis', position: 'Administrator'},
    {name: 'Joseph', position: 'Super Administrator'}
  ];

  model: any = {};

  addUser(): void{

  }

  deleteUser(): void{

  }

  editUser(): void{

  }

  updateUser(): void{
  }
}
