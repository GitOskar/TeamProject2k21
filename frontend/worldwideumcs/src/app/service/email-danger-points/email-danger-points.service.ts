import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailDangerPointsService {

  url = "http://127.0.0.1:8095"

  constructor(private httpClient: HttpClient) { }

  public checkEmailDangerScore(firstName: string, lastName: string, subject: string, emailBody: string): Observable<EmailDangerData> {

    let httpParams = new HttpParams({
      fromObject: {
        first_name: firstName,
        last_name: lastName,
        subject: subject,
        email_body: emailBody
    }}); 
    
    return this.httpClient.get<EmailDangerData>(this.url, {params: httpParams});
  }
}

export interface EmailDangerData {
  colloquialism_count: number;
  profanity_count: number;
  score: number;
  status: number;
}