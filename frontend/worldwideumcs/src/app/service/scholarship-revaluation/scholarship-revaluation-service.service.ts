import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipRevaluationServiceService {

  private url = "http://localhost:8080/scholarship-revaluation"

  constructor(private httpClient: HttpClient) { }

  getScholarshipData(type: string, level: string, currency: string) : Observable<number> {
    let httpParams = new HttpParams({
      fromObject: {
        scholarship: type,
        level: level,
        currency: currency
    }}); 

    return this.httpClient.get<number>(this.url, {params: httpParams});
  }
}
