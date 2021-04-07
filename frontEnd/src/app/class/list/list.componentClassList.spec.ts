import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentClassList } from './list.componentClassList';

describe('ListComponent', () => {
  let component: ListComponentClassList;
  let fixture: ComponentFixture<ListComponentClassList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponentClassList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentClassList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
