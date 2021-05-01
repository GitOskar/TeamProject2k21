import { Component, OnInit } from '@angular/core';
import { AirQualityServiceService, AirQualityData } from 'src/app/service/air-quality/air-quality-service.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {

  selectedCities: string[];
  selectedPollutions: string[];
  airQualityData: AirQualityData[];
  

  constructor(private service: AirQualityServiceService) { }

  ngOnInit(): void {
  }

  getData() : void {
    if (this.selectedCities == undefined || this.selectedPollutions == undefined) {
      return;
    }
    this.service.getAirQualityData(this.selectedCities, this.selectedPollutions).subscribe(value => {
      this.airQualityData = value;
      
      console.log(this.airQualityData);
    });
  }

  cities = [
    { value: 'lublin', viewValue: 'Lublin' },
    { value: 'warszawa', viewValue: 'Warszawa' },
    { value: 'kraków', viewValue: 'Kraków' },
    { value: 'wrocław', viewValue: 'Wrocław' },
    { value: 'poznań', viewValue: 'Poznań' }
  ];

  pollutions = [
    'SO2',
    'NO2',
    'PM10',
    'PM2.5',
    'CO',
    'C6H6',
    'O3'
  ];
}
