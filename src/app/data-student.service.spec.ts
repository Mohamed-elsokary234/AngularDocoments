import { TestBed } from '@angular/core/testing';

import { DataStudentService } from './data-student.service';

describe('DataStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStudentService = TestBed.get(DataStudentService);
    expect(service).toBeTruthy();
  });
});
