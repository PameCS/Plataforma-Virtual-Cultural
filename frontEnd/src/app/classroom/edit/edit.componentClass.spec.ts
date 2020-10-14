import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponentClass } from './edit.componentClass';

describe('EditComponent', () => {
  let component: EditComponentClass;
  let fixture: ComponentFixture<EditComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentClass ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
