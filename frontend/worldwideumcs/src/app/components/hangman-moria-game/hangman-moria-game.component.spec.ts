import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanMoriaGameComponent } from './hangman-moria-game.component';

describe('HangmanMoriaGameComponent', () => {
  let component: HangmanMoriaGameComponent;
  let fixture: ComponentFixture<HangmanMoriaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanMoriaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanMoriaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
