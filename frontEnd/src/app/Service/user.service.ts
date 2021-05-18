import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { Classroom } from '../Model/Classroom';
import { Advertisement } from '../Model/Advertisement';
import { Course } from '../Model/Course';
import { Event } from '../Model/Event';
import { from, Observable } from 'rxjs';
import { CourseRequest } from '../Model/CourseRequest';
import { ClassRequest } from '../Model/ClassRequest';

const API_URL = 'http://localhost:8084/api/test/';
const Url = 'http://localhost:8084/users';
const Urlclass = 'http://localhost:8084/classroom';
const Urlcourse = 'http://localhost:8084/course';
const Urladvertisement = 'http://localhost:8084/Advertisement';
const UrlclassRequest = 'http://localhost:8084/classroomRequest';
const UrlcourseRequest = 'http://localhost:8084/courseRequest';
const Urlevent = 'http://localhost:8084/event';
const UrlListProfessor = 'http://localhost:8084/users/listProfessors';
const UrlmyCourses = 'http://localhost:8084/users/myCourses';
const UrlEnroll = 'http://localhost:8084/course/enroll';
const UrlStudentsList = 'http://localhost:8084/course/listStudents';

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

  //------------------------------admin module----------------------------------------------
  
  getUsers() {
    return this.http.get<User[]>(Url);
  }

  getProfessorUsers() {
    return this.http.get<User[]>(UrlListProfessor);
  }

  getUserCourses(user: User) {
    return this.http.get<Course[]>(UrlmyCourses+ "/" + user.username);
  }

  getStudentList(id: number) {
    return this.http.get<User[]>(UrlStudentsList+ "/" + id);
  }

  
  createUser(user: User) {
    return this.http.post<User>(Url, user);
  }

  enrollToCourse(course: Course, id:String) {
    return this.http.post<Course>(UrlEnroll+ "/" + id, course);
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

  //----------------------------------class request--------------------------------------------
  getClassRequests() {
    return this.http.get<ClassRequest[]>(UrlclassRequest);
  }

  createClassRequest(classRequest: ClassRequest) {
    return this.http.post<ClassRequest>(UrlclassRequest, classRequest);
  }

  getClassRequestid(id: number) {
    return this.http.get<ClassRequest>(UrlclassRequest + "/" + id);
  }

  deleteClassRequest(classRequest: ClassRequest) {
    return this.http.delete<ClassRequest>(UrlclassRequest + "/" + classRequest.PK_idRequest);
  }

  //----------------------------------course module----------------------------------------------
  getCourse() {
    return this.http.get<Course[]>(Urlcourse);
  }

  createCourse(course: Course,file: File) {
    return this.http.post<Course>(Urlcourse  + "/" + file.name,course);
  }

  getCourseid(id: number) {
    return this.http.get<Course>(Urlcourse + "/" + id);
  }

  exportExcelStudents(course: Course): Observable<Blob>{
    return this.http.get(`${Urlcourse}/exportStudentClass/excel/`+course.pk_idCourse,{responseType:'blob'});
 }

  getCourseImage(course: Course) {
    return this.http.get<Course>(Urlcourse + "/image/" + course.pk_idCourse);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(Urlcourse + "/" + course.pk_idCourse, course);
  }

  deleteCourse(course: Course) {
    return this.http.delete<Course>(Urlcourse + "/" + course.pk_idCourse);
  }

  courseEnroll(course: Course, user: User){
    return this.http.post<Course>(Urlcourse + "/enroll/" + user.username,course);
  }

  getCourseMaterial(id: number): Observable<any>{
    return this.http.get(Urlcourse+"/materialList/"+ id);

  }
  //----------------------------------course requests--------------------------------------------
  getCourseRequests() {
    return this.http.get<CourseRequest[]>(UrlcourseRequest);
  }

  createCourseRequest(courseRequest: CourseRequest) {
    return this.http.post<CourseRequest>(UrlcourseRequest, courseRequest);
  }

  getCourseRequestid(id: number) {
    return this.http.get<CourseRequest>(UrlcourseRequest + "/" + id);
  }

  deleteCourseRequest(courseRequest: CourseRequest) {
    return this.http.delete<CourseRequest>(UrlcourseRequest + "/" + courseRequest.PK_idRequest);
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
  //----------------------------------Advertisement module----------------------------------------------
  getAdvertisement() {
    return this.http.get<Advertisement[]>(Urladvertisement);
  }

  createAvertisement(Advertisement: Advertisement) {
    return this.http.post<Advertisement>(Urladvertisement, Advertisement);
  }

  getAdvertisementid(id: number) {
    return this.http.get<Advertisement>(Urladvertisement + "/" + id);
  }

  updateAdvertisement(Advertisement: Advertisement) {
    return this.http.put<Advertisement>(Urladvertisement+ "/" + Advertisement.pk_id, Advertisement);
  }

  deleteAdvertisement(Advertisement: Advertisement) {
    return this.http.delete<Advertisement>(Urladvertisement + "/" + Advertisement.pk_id);
}

}
