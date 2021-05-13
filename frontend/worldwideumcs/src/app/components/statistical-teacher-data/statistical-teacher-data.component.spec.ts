import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalTeacherDataComponent } from './statistical-teacher-data.component';

describe('StatisticalTeacherDataComponent', () => {
  let component: StatisticalTeacherDataComponent;
  let fixture: ComponentFixture<StatisticalTeacherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalTeacherDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalTeacherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
