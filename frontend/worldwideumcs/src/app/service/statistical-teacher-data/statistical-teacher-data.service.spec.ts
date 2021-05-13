import { TestBed } from '@angular/core/testing';

import { StatisticalTeacherDataService } from './statistical-teacher-data.service';

describe('StatisticalTeacherDataService', () => {
  let service: StatisticalTeacherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticalTeacherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
