import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Classroom } from '../../Model/Classroom';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.componentClass.html',
  styleUrls: ['./add.componentClass.css']
})
export class AddComponentClass implements OnInit {


  classroom: Classroom = new Classroom();
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

  classForm = this.fb.group({
    Id: ['', Validators.required],
    classCapacity: ['', Validators.required],
    classAvailability: ['', Validators.required],
    classType: ['', Validators.required]
  });

  get Id() { return this.classForm.get('Id'); }
  get capacity() { return this.classForm.get('classCapacity'); }
  get availability() { return this.classForm.get('classAvailability'); }
  get type() { return this.classForm.get('classType'); }

  // tslint:disable-next-line: typedef
  Save() {
    if (this.classForm.valid) {
      this.service.createClass(this.classroom)
        .subscribe(data => {
          alert('¡Se agregó con exito!');
          this.router.navigate(['listClassroom']);
        });
    }

  }

}
