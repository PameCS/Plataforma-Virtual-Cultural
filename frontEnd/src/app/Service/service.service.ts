import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { Classroom } from '../Model/Classroom';
import { Course } from '../Model/Course';
import { Event } from '../Model/Event';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8084/backEnd/users';
  Urlclass = 'http://localhost:8084/backEnd/classroom';
  Urlcourse = 'http://localhost:8084/backEnd/course';
  Urlevent = 'http://localhost:8084/backEnd/event';


  //------------------------------users module----------------------------------------------
  // tslint:disable-next-line: typedef
  getUsers() {
    return this.http.get<User[]>(this.Url);
  }

  // tslint:disable-next-line: typedef
  createUser(user: User) {
    return this.http.post<User>(this.Url, user);
  }

  getUserId(id: number) {
    return this.http.get<User>(this.Url + "/" + id);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.Url + "/" + user.pk_idUser, user);
  }


  //Delete usuario
  deleteUser(user: User) {
    return this.http.delete<User>(this.Url + "/" + user.pk_idUser);
  }

  //------------------------------classroom module----------------------------------------------

  getClass() {
    return this.http.get<Classroom[]>(this.Urlclass);
  }

  createClass(Classroom: Classroom) {
    return this.http.post<Classroom>(this.Urlclass, Classroom);
  }

  getClassid(id: number) {
    return this.http.get<Classroom>(this.Urlclass + "/" + id);
  }

  updateClass(Classroom: Classroom) {
    return this.http.put<Classroom>(this.Urlclass + "/" + Classroom.pk_idClass, Classroom);
  }

  deleteClass(Classroom: Classroom) {
    return this.http.delete<User>(this.Urlclass + "/" + Classroom.pk_idClass);
  }

  //----------------------------------course module----------------------------------------------
  getCourse() {
    return this.http.get<Course[]>(this.Urlcourse);
  }

  createCourse(course: Course) {
    return this.http.post<Course>(this.Urlcourse, course);
  }

  getCourseid(id: number) {
    return this.http.get<Course>(this.Urlcourse + "/" + id);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(this.Urlcourse + "/" + course.pk_courseCode, course);
  }

  deleteCourse(course: Course) {
    return this.http.delete<Course>(this.Urlcourse + "/" + course.pk_courseCode);
  }
  //--------------------------Event module------------------------------
  getEvent() {
    return this.http.get<Event[]>(this.Urlevent);
  }

  createEvent(event: Event) {
    return this.http.post<Event>(this.Urlevent, event);
  }

  getEventid(id: number) {
    return this.http.get<Event>(this.Urlevent + "/" + id);
  }

  updateEvent(event: Event) {
    return this.http.put<Event>(this.Urlevent + "/" + event.pk_idEvent, event);
  }

  deleteEvent(event: Event) {
    return this.http.delete<Event>(this.Urlevent + "/" + event.pk_idEvent);
  }
}