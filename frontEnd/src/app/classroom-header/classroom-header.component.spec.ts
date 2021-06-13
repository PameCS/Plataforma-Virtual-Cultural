import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomHeaderComponent } from './classroom-header.component';

describe('ClassroomHeaderComponent', () => {
  let component: ClassroomHeaderComponent;
  let fixture: ComponentFixture<ClassroomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
