import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cesta } from '../models/cesta';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  constructor(private http: HttpClient) {}

  getProdutoCesta(): Observable<Array<Cesta>> {
    return this.http.get<Array<Cesta>>('http://localhost:1000/cesta');
   }

  getCesta(sessionId: String): Observable<Array<Cesta>>{
    return this.http.get<Array<Cesta>>('http://localhost:1000/cesta/' + sessionId);
   }
}
