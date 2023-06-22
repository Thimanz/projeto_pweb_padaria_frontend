import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteServiceService } from '../services/cliente-service.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
})
export class EsqueciSenhaComponent implements OnInit {
  infoEsqueci: FormGroup;
  inputEmail: String;
  formularioValido: boolean = true;
  private cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteServiceService
  ) {}

  ngOnInit(): void {
    this.infoEsqueci = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(.*@.*\..*)/),
        ]),
      ],
    });
  }
  onClick() {
    this.clienteService.doLogin(this.infoEsqueci.value.email).subscribe({
      next: (data: Cliente) => {
        this.cliente = data;

        this.clienteService
          .enviarEmail({
            nome: this.cliente.nome,
            email: this.cliente.email,
            senha: this.cliente.senha,
          })
          .subscribe({
            next: (data: Object) => {},
          });
      },
      error: (erro: any) => {
        this.formularioValido = false;
      },
    });
  }
}
