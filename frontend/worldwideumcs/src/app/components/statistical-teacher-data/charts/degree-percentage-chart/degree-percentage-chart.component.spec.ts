import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePercentageChartComponent } from './degree-percentage-chart.component';

describe('DegreePercentageChartComponent', () => {
  let component: DegreePercentageChartComponent;
  let fixture: ComponentFixture<DegreePercentageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreePercentageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePercentageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
