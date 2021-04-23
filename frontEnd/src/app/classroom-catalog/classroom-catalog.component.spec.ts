import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCatalogComponent } from './classroom-catalog.component';

describe('ClassroomCatalogComponent', () => {
  let component: ClassroomCatalogComponent;
  let fixture: ComponentFixture<ClassroomCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
