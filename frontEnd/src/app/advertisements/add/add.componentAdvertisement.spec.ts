import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentAdvertisement } from './add.componentAdvertisement';

describe('AddComponentAdvertisement', () => {
  let component: AddComponentAdvertisement;
  let fixture: ComponentFixture<AddComponentAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentAdvertisement ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
