import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScholarshipRevaluationComponent } from './components/scholarship-revaluation/scholarship-revaluation.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AirQualityChartComponent } from './components/air-quality/air-quality-chart/air-quality-chart.component';
import { HangmanMoriaGameComponent } from './components/hangman-moria-game/hangman-moria-game.component';
import { EmailDangerScoreComponent } from './components/email-danger-score/email-danger-score.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StatisticalTeacherDataComponent } from './components/statistical-teacher-data/statistical-teacher-data.component';
import { DegreePercentageChartComponent } from './components/statistical-teacher-data/charts/degree-percentage-chart/degree-percentage-chart.component';
import { GenderPercentageChartComponent } from './components/statistical-teacher-data/charts/gender-percentage-chart/gender-percentage-chart.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UmcsEventTimeComponent } from './components/umcs-event-time/umcs-event-time.component'

@NgModule({
  declarations: [
    AppComponent,
    ScholarshipRevaluationComponent,
    AirQualityComponent,
    AirQualityChartComponent,
    HangmanMoriaGameComponent,
    EmailDangerScoreComponent,
    StatisticalTeacherDataComponent,
    DegreePercentageChartComponent,
    GenderPercentageChartComponent,
    UmcsEventTimeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
