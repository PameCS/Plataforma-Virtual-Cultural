import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { Classroom } from '../Model/Classroom';
import { Course } from '../Model/Course';
import { Event } from '../Model/Event';
import { Advertisement } from '../Model/Advertisement';
import { Observable } from 'rxjs';
import { CourseRequest } from '../Model/CourseRequest';
import { ClassRequest } from '../Model/ClassRequest';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8084/users';
  Urlclass = 'http://localhost:8084/classroom';
  Urlcourse = 'http://localhost:8084/course';
  Urlevent = 'http://localhost:8084/event';
  Urladvertisement =  'http://localhost:8084/courseAds';
  UrlListProfessor = 'http://localhost:8084/users/listProfessors';
  UrlCourseRequest='http://localhost:8084/courseRequest';
  UrlClassRequest='http://localhost:8084/classroomRequest';
 

  //------------------------------users module----------------------------------------------
  // tslint:disable-next-line: typedef
  getUsers() {
    return this.http.get<User[]>(this.Url);
  }

  getProfessorUsers() {
    return this.http.get<User[]>(this.UrlListProfessor);
  }

  // tslint:disable-next-line: typedef
  createUser(user: User) {
    return this.http.post<User>(this.Url+ "/list", user);
  }

  getUserId(id: number) {
    return this.http.get<User>(this.Url + "/" + id);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.Url + "/" + user.username, user);
  }


  //Delete usuario
  deleteUser(user: User) {
    return this.http.delete<User>(this.Url + "/" + user.username);
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

  createCourse(course: Course,file: File) {
    return this.http.post<Course>(this.Urlcourse+ "/" + file.name, course);
  }

  getCourseid(id: number) {
    return this.http.get<Course>(this.Urlcourse + "/" + id);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(this.Urlcourse + "/" + course.pk_idCourse, course);
  }

  deleteCourse(course: Course) {
    return this.http.delete<Course>(this.Urlcourse + "/" + course.pk_idCourse);
  }

  getCourseImage(id: number) : Observable<any>{
    return this.http.get(this.Urlcourse + "/image/" + id);
  }

  exportExcelStudents(course: Course): Observable<Blob>{
     return this.http.get(`${this.Urlcourse}/exportStudentClass/excel/`+course.pk_idCourse,{responseType:'blob'});
  }

  getCourseMateral(course: Course): Observable<any>{
    return this.http.get(`${this.Urlcourse}/materialList/`+course.pk_idCourse);
  }
  
  //----------------------------------Advertisement module----------------------------------------------
  getAdvertisement() {
    return this.http.get<Advertisement[]>(this.Urladvertisement);
  }

  createAvertisement(advertisement: Advertisement, course: Course) {
    return this.http.post<Advertisement>(this.Urlcourse+ "/CourseAds/" + course.pk_idCourse, advertisement);
  }

  getAdvertisementid(id: number) {
    return this.http.get<Advertisement>(this.Urladvertisement + "/" + id);
  }

  updateAdvertisement(Advertisement: Advertisement) {
    return this.http.put<Advertisement>(this.Urladvertisement+ "/" + Advertisement.pk_id, Advertisement);
  }

  deleteAdvertisement(Advertisement: Advertisement) {
    return this.http.delete<Advertisement>(this.Urladvertisement + "/" + Advertisement.pk_id);
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
    //--------------------------Course Request module------------------------------
    createCourseRequest(courseRequest: CourseRequest) {
      return this.http.post<CourseRequest>(this.UrlCourseRequest, courseRequest);
    }

     //--------------------------Class Request module------------------------------
     createClassRequest(classRequest: ClassRequest) {
      return this.http.post<ClassRequest>(this.UrlClassRequest, classRequest);
    }
}
