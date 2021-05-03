import { TestBed } from '@angular/core/testing';

import { SpaceAssignmentService } from './space-assignment.service';

describe('SpaceAssignmentService', () => {
  let service: SpaceAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
