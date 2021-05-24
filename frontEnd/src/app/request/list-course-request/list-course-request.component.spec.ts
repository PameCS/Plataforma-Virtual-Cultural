import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseRequestComponent } from './list-course-request.component';

describe('ListCourseRequestComponent', () => {
  let component: ListCourseRequestComponent;
  let fixture: ComponentFixture<ListCourseRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
