import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScholarshipRevaluationComponent } from './components/scholarship-revaluation/scholarship-revaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    ScholarshipRevaluationComponent,
    AirQualityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
