import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { HangmanMoriaGameComponent } from './components/hangman-moria-game/hangman-moria-game.component';
import { ScholarshipRevaluationComponent } from './components/scholarship-revaluation/scholarship-revaluation.component';
import { EmailDangerPointsService } from './service/email-danger-points/email-danger-points.service';

const routes: Routes = [
  { path: 'scholarship-revaluation', component: ScholarshipRevaluationComponent },
  { path: 'air-quality', component: AirQualityComponent },
  { path: 'hangman-moria-game', component: HangmanMoriaGameComponent },
  { path: 'email-danger-score', component: EmailDangerPointsService },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
