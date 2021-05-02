import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoriaParserService {

  private url = "http://localhost:8080/moria-parser"

  constructor(private httpClient: HttpClient) { }

  public getItInstituteTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.url + "/it-institute");
  }

  public getNoItInstituteTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.url + "/no-it-institute");
  }
}

export interface Teacher {
  degree: string;
  department_id: number;
  first_name: string;
  id: number;
  last_name: string;
}
