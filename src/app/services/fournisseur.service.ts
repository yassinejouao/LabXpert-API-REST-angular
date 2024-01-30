import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  
  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) { }

  server$ = this.http.get<CustumResponse>(${this.apiUrl}/fournisseur/all)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  handleError(handleError: any): Observable<never> {
   return throwError ('Method not implemented.');
  }

}
