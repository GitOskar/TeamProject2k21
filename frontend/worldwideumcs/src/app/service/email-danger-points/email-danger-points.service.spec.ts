import { TestBed } from '@angular/core/testing';

import { EmailDangerPointsService } from './email-danger-points.service';

describe('EmailDangerPointsService', () => {
  let service: EmailDangerPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailDangerPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
