import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cesta } from '../models/cesta';

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  constructor(private http: HttpClient) {}

  getCesta(sessionId: String): Observable<Array<Cesta>> {
    return this.http.get<Array<Cesta>>(
      'http://localhost:1000/cestas/' + sessionId
    );
  }
  postItem(sessionId: String, codProduto: Number, codCliente: Number | null) {
    return this.http.post<Cesta>('http://localhost:1000/cestas/', {
      sessionid: sessionId,
      codproduto: codProduto,
      codcliente: codCliente,
      quantidade: 1,
    });
  }
}
