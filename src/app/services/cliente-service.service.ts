import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {
  constructor(private httpClient: HttpClient) {}
  public cadastrarUsuario(cliente: Cliente) {
    return this.httpClient.post<Cliente>(
      'http://localhost:1000/clientes',
      cliente
    );
  }

  public doLogin(email: String): Observable<Cliente> {
    return this.httpClient.get<Cliente>(
      `http://localhost:1000/clientes/${email}`
    );
  }
  public getSession(codCliente: Number) {
    return this.httpClient.get<any>(
      'http://localhost:1000/session/' + codCliente
    );
  }
}
