import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassroomRequestComponent } from './list-classroom-request.component';

describe('ListClassroomRequestComponent', () => {
  let component: ListClassroomRequestComponent;
  let fixture: ComponentFixture<ListClassroomRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClassroomRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassroomRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
