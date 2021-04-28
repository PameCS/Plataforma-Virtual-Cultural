import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVirtualClassRoomComponent } from './home-virtual-class-room.component';

describe('HomeVirtualClassRoomComponent', () => {
  let component: HomeVirtualClassRoomComponent;
  let fixture: ComponentFixture<HomeVirtualClassRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVirtualClassRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVirtualClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
