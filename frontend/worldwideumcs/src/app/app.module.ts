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

@NgModule({
  declarations: [
    AppComponent,
    ScholarshipRevaluationComponent,
    AirQualityComponent,
    AirQualityChartComponent,
    HangmanMoriaGameComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
