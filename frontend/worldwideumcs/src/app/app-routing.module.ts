import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { ScholarshipRevaluationComponent } from './components/scholarship-revaluation/scholarship-revaluation.component';

const routes: Routes = [
  { path: 'scholarship-revaluation', component: ScholarshipRevaluationComponent },
  { path: 'air-quality', component: AirQualityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
