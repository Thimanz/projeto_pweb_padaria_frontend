import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosServiceService {
  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Object> {
    return this.http.get<Object>('http://localhost:1000/produtos');
  }

  getProduto(codigo: Number): Observable<Produto> {
    return this.http.get<Produto>('http://localhost:1000/produtos/' + codigo);
  }
}
