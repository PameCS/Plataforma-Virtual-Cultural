import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentClass } from "./AddComponentClass";

describe('AddComponent', () => {
  let component: AddComponentClass;
  let fixture: ComponentFixture<AddComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentClass ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
