import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { Classroom } from '../Model/Classroom';
import { Course } from '../Model/Course';
import { Event } from '../Model/Event';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8084/api/test/';
const Url = 'http://localhost:8084/users';
const Urlclass = 'http://localhost:8084/classroom';
const Urlcourse = 'http://localhost:8084/course';
const Urlevent = 'http://localhost:8084/event/list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'super-admin', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  //------------------------------users module----------------------------------------------
  // tslint:disable-next-line: typedef
  getUsers() {
    return this.http.get<User[]>(Url);
  }

  // tslint:disable-next-line: typedef
  createUser(user: User) {
    return this.http.post<User>(Url, user);
  }

  getUserId(id: number) {
    return this.http.get<User>(Url + "/" + id);
  }

  updateUser(user: User) {
    return this.http.put<User>(Url + "/" + user.username, user);
  }


  //Delete usuario
  deleteUser(user: User) {
    return this.http.delete<User>(Url + "/" + user.username);
  }

  //------------------------------classroom module----------------------------------------------

  getClass() {
    return this.http.get<Classroom[]>(Urlclass);
  }

  createClass(Classroom: Classroom) {
    return this.http.post<Classroom>(Urlclass, Classroom);
  }

  getClassid(id: number) {
    return this.http.get<Classroom>(Urlclass + "/" + id);
  }

  updateClass(Classroom: Classroom) {
    return this.http.put<Classroom>(Urlclass + "/" + Classroom.pk_idClass, Classroom);
  }

  deleteClass(Classroom: Classroom) {
    return this.http.delete<User>(Urlclass + "/" + Classroom.pk_idClass);
  }

  //----------------------------------course module----------------------------------------------
  getCourse() {
    return this.http.get<Course[]>(Urlcourse);
  }

  createCourse(course: Course) {
    return this.http.post<Course>(Urlcourse, course);
  }

  getCourseid(id: number) {
    return this.http.get<Course>(Urlcourse + "/" + id);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(Urlcourse + "/" + course.pk_courseCode, course);
  }

  deleteCourse(course: Course) {
    return this.http.delete<Course>(Urlcourse + "/" + course.pk_courseCode);
  }
  //--------------------------Event module------------------------------
  getEvent() : Observable<any>{
    return this.http.get<Event[]>(Urlevent);
  }
  
  createEvent(event: Event) {
    return this.http.post<Event>(Urlevent, event);
  }

  getEventid(id: number) {
    return this.http.get<Event>(Urlevent + "/" + id);
  }

  updateEvent(event: Event) {
    return this.http.put<Event>(Urlevent + "/" + event.pk_idEvent, event);
  }

  deleteEvent(event: Event) {
    return this.http.delete<Event>(Urlevent + "/" + event.pk_idEvent);
  }
}
