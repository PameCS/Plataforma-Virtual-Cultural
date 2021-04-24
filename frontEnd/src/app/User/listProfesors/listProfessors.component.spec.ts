import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessorsComponent } from './listProfessors.component';

describe('ListComponent', () => {
  let component: ListProfessorsComponent;
  let fixture: ComponentFixture<ListProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
