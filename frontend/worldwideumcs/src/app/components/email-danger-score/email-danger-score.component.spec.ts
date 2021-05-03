import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDangerScoreComponent } from './email-danger-score.component';

describe('EmailDangerScoreComponent', () => {
  let component: EmailDangerScoreComponent;
  let fixture: ComponentFixture<EmailDangerScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDangerScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDangerScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
