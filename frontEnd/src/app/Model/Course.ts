import {ServiceService  } from '../Service/service.service';

export class Course{
    // tslint:disable-next-line: variable-name
    constructor(){}
    pk_idCourse: number;
    private service: ServiceService;
    name: string;
    mode: string;
    startDate: Date;
    finishDate: Date;
    shedule: string;
    professor: string;
    studentQuantity: number;
    
}