import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponentAdvertisement } from './edit.componentAdvertisement';

describe('EditComponentAdvertisement', () => {
  let component: EditComponentAdvertisement;
  let fixture: ComponentFixture<EditComponentAdvertisement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentAdvertisement ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentAdvertisement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
