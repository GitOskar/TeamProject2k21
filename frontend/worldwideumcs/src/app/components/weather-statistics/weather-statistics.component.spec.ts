import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStatisticsComponent } from './weather-statistics.component';

describe('WeatherStatisticsComponent', () => {
  let component: WeatherStatisticsComponent;
  let fixture: ComponentFixture<WeatherStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
