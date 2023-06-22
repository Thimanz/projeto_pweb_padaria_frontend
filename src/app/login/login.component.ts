import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../services/cliente-service.service';
import { Cliente } from '../models/cliente';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  infoLogin: FormGroup;
  inputEmail: String;
  formularioValido: boolean = true;
  private cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteServiceService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.cliente = new Cliente();

    this.infoLogin = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(.*@.*\..*)/),
        ]),
      ],
      senha: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[A-z0-9\s]{4,50}/),
        ]),
      ],
    });
  }
  public doLogin(): void {
    if (this.infoLogin.valid) {
      this.formularioValido = true;
    } else {
      this.formularioValido = false;
    }

    this.clienteService.doLogin(this.infoLogin.value.email).subscribe({
      next: (data: Cliente) => {
        this.cliente = data;

        if (this.cliente.senha === this.infoLogin.value.senha) {
          this.formularioValido = true;
          this.localStorageService.isLogged(true);

          this.clienteService.getSession(this.cliente.codigo).subscribe({
            next: (data: any) => {
              this.localStorageService.setSession(data.sessionId);
            },
          });
        } else {
          this.formularioValido = false;
        }
      },
      error: (erro: any) => {
        this.formularioValido = false;
      },
    });
  }
}
