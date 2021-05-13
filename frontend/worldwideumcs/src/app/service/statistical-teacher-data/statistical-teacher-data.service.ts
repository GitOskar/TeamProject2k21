import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticalTeacherDataService {

  url = "http://localhost:8080/teacher-statistics";

  constructor(private httpClient: HttpClient) { }

  getTeacherStatistics(type: string): Observable<TeacherStatisticData> {
    let httpParams = new HttpParams({
      fromObject: {
        type: type
    }}); 

    return this.httpClient.get<TeacherStatisticData>(this.url, { params: httpParams });
  }
}

export interface DegreesPercentage {
  dr_percentage: number;
  drhab_percentage: number;
  mgr_percentage: number;
  prof_percentage: number;
}

export interface TeacherStatisticData {
  degrees_percentage: DegreesPercentage;
  female_percentage: number;
  male_percentage: number;
  type: string;
}