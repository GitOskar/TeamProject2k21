import { TestBed } from '@angular/core/testing';
import { ScholarshipRevaluationServiceService } from './scholarship-revaluation-service.service';

describe('ScholarshipRevaluationServiceService', () => {
  let service: ScholarshipRevaluationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipRevaluationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
