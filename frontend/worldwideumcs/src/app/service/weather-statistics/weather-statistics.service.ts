import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherStatisticsService {

  url = "http://localhost:8080/weather-data";

  constructor(private httpClient: HttpClient) { }

  downloadWeatherList(cityNames: string[]): Observable<WeatherStatistics[]> {
    let httpParams = new HttpParams({
      fromObject: {
        cities: cityNames.join(",")
    }});

    return this.httpClient.get<WeatherStatistics[]>(this.url, {params: httpParams});
  }
}

export interface WeatherStatistics {
  city_name: string;
  cloud_coverage: number;
  rain: string;
  status: number;
  temperature: number;
  wind_speed: number;
}
