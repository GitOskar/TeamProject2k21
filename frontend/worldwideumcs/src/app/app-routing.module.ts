import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { EmailDangerScoreComponent } from './components/email-danger-score/email-danger-score.component';
import { HangmanMoriaGameComponent } from './components/hangman-moria-game/hangman-moria-game.component';
import { ScholarshipRevaluationComponent } from './components/scholarship-revaluation/scholarship-revaluation.component';
import { StatisticalTeacherDataComponent } from './components/statistical-teacher-data/statistical-teacher-data.component';

const routes: Routes = [
  { path: 'scholarship-revaluation', component: ScholarshipRevaluationComponent },
  { path: 'air-quality', component: AirQualityComponent },
  { path: 'hangman-moria-game', component: HangmanMoriaGameComponent },
  { path: 'email-danger-score', component: EmailDangerScoreComponent },
  { path: 'statistical-teacher-data', component: StatisticalTeacherDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
