import { Component, OnInit } from '@angular/core';
import { WeatherStatistics, WeatherStatisticsService } from 'src/app/service/weather-statistics/weather-statistics.service';

@Component({
  selector: 'app-weather-statistics',
  templateUrl: './weather-statistics.component.html',
  styleUrls: ['./weather-statistics.component.css']
})
export class WeatherStatisticsComponent implements OnInit {

  selectedCities: string[];
  weatherStatistics: WeatherStatistics[];

  constructor(private service: WeatherStatisticsService) { }

  ngOnInit(): void {
  }

  getWeatherData(): void {
    this.service.downloadWeatherList(this.selectedCities).subscribe(value => {
      value.filter(value => value.status == 200);
      value.map(value => value.city_name = this.capitalizeFirstLetter(value.city_name));
      this.weatherStatistics = value;
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cities = [
    { value: 'lublin', viewValue: 'Lublin' },
    { value: 'warszawa', viewValue: 'Warszawa' },
    { value: 'kraków', viewValue: 'Kraków' },
    { value: 'wrocław', viewValue: 'Wrocław' },
    { value: 'poznań', viewValue: 'Poznań' },
    { value: 'londyn', viewValue: 'Londyn' },
    { value: 'berlin', viewValue: 'Berlin' }
  ];
}
