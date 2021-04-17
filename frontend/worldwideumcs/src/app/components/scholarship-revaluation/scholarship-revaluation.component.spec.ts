import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipRevaluationComponent } from './scholarship-revaluation.component';

describe('ScholarshipRevaluationComponent', () => {
  let component: ScholarshipRevaluationComponent;
  let fixture: ComponentFixture<ScholarshipRevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipRevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipRevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
