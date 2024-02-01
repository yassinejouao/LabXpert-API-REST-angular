import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/analysis';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/all`);
  }

  getById(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/result/${id}`);
  }
}
