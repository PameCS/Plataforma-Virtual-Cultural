import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAssignmentComponent } from './space-assignment.component';

describe('SpaceAssignmentComponent', () => {
  let component: SpaceAssignmentComponent;
  let fixture: ComponentFixture<SpaceAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
