import { FileDB } from "./FileDB";

export class Event{
    constructor(){}
    // tslint:disable-next-line: variable-name
    pk_idEvent: number;
    name: string;
    dateEvent: Date;
    place: string;
    hourEvent: string;
    image: FileDB;
}