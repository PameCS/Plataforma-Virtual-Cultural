import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRequestComponent } from './class-request.component';

describe('ClassRequestComponent', () => {
  let component: ClassRequestComponent;
  let fixture: ComponentFixture<ClassRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
