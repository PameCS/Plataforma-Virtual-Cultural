import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVirtualClassroomComponent } from './login-virtual-classroom.component';

describe('LoginVirtualClassroomComponent', () => {
  let component: LoginVirtualClassroomComponent;
  let fixture: ComponentFixture<LoginVirtualClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVirtualClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVirtualClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
