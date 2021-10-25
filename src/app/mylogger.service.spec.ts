import { TestBed } from '@angular/core/testing';

import { MyloggerService } from './mylogger.service';

describe('MyloggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyloggerService = TestBed.get(MyloggerService);
    expect(service).toBeTruthy();
  });
});
