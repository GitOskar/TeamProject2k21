import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmcsEventTimeComponent } from './umcs-event-time.component';

describe('UmcsEventTimeComponent', () => {
  let component: UmcsEventTimeComponent;
  let fixture: ComponentFixture<UmcsEventTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmcsEventTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmcsEventTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
