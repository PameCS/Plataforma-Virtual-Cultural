import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentClass } from './list.componentClass';

describe('ListComponent', () => {
  let component: ListComponentClass;
  let fixture: ComponentFixture<ListComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponentClass ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
