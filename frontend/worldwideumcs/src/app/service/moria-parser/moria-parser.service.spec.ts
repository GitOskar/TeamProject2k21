import { TestBed } from '@angular/core/testing';

import { MoriaParserService } from './moria-parser.service';

describe('MoriaParserService', () => {
  let service: MoriaParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoriaParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
