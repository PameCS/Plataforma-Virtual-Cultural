import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8084/demo/users';

  // tslint:disable-next-line: typedef
  getUsers(){
    return this.http.get<User[]>(this.Url);
  }

  // tslint:disable-next-line: typedef
  createUser(user: User){
    return this.http.post<User>(this.Url, user);
  }
}
