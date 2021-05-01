import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityServiceService {

  private url = "http://localhost:8080/umcs-air-quality"

  constructor(private httpClient: HttpClient) { }

  getAirQualityData(cities: string[], pollutions: string[]): Observable<AirQualityData[]> {
    
    let httpParams = new HttpParams({
      fromObject: {
        cities: cities.join(","),
        pollutions: pollutions.join(",")
    }}); 

    return this.httpClient.get<AirQualityData[]>(this.url, {params: httpParams});
  }
}

export interface PollutionTypes {
  CO: number;
  NO2: number;
  SO2: number;
  PM10: number;
  "PM2.5": number;
  C6H6: number;
  O3: number;
}

export interface AirQualityData {
  city_name: string;
  pollution_types: PollutionTypes;
}