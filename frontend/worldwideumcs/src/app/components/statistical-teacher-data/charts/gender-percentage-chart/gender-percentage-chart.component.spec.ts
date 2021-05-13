import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPercentageChartComponent } from './gender-percentage-chart.component';

describe('GenderPercentageChartComponent', () => {
  let component: GenderPercentageChartComponent;
  let fixture: ComponentFixture<GenderPercentageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderPercentageChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderPercentageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
