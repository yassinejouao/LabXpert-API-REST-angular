import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reagent } from '../models/reagent.model';
const baseUrl = 'http://localhost:8080/reagent';

@Injectable({
  providedIn: 'root',
})
export class ReagentService {
  constructor(private http: HttpClient) {}
  // to get all user
  getAll(): Observable<Reagent[]> {
    return this.http.get<Reagent[]>(`${baseUrl}/all`);
  }
  // to create user
  create(data: Reagent): Observable<Reagent> {
    return this.http.post(`${baseUrl}/add`, data);
  }
  // to get one user by id
  getById(id: any): Observable<Reagent> {
    return this.http.get<Reagent>(`${baseUrl}/${id}`);
  }
  // update user
  update(id: any, data: any): Observable<Reagent> {
    return this.http.post<Reagent>(`${baseUrl}/update/${id}`, data);
  }
  
}
