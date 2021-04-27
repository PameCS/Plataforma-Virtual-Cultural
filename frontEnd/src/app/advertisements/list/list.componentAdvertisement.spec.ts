import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentAdvertisement } from './list.componentAdvertisement';

describe('ListComponentAdvertisement', () => {
  let component: ListComponentAdvertisement;
  let fixture: ComponentFixture<ListComponentAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponentAdvertisement ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
