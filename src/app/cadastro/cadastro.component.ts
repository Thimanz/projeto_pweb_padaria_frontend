import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ValidarSenhaService } from '../services/validar-senha.service';
import { Cliente } from '../models/cliente';
import { ClienteServiceService } from '../services/cliente-service.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  infoCadastro: FormGroup;
  cliente = new Cliente();
  inputEmail: String;
  formularioValido: boolean = true;
  cadastroEfetuado: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: ClienteServiceService
  ) {}

  ngOnInit(): void {
    this.infoCadastro = this.formBuilder.group({
      nome: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[A-z\s]{3,50}/),
        ]),
      ],
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
          Validators.pattern(/[A-z\s]{4,50}/),
        ]),
      ],

      confirmarSenha: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[A-z\s]{4,50}/),
          ValidarSenhaService.validarSenha,
        ]),
      ],

      cpf: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/),
        ]),
      ],
      telefone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[0-9]{5}-?[0-9]{4}/),
        ]),
      ],
    });
  }

  cadastro() {
    if (this.infoCadastro.valid) {
      this.formularioValido = true;
      this.cadastroEfetuado = true;

      this.cliente.nome = this.infoCadastro.value.nome;
      this.cliente.email = this.infoCadastro.value.email;
      this.cliente.senha = this.infoCadastro.value.senha;
      this.cliente.telefone = Number(
        String(this.infoCadastro.value.telefone).replaceAll(/-/g, '')
      );
      this.cliente.cpf = Number(
        String(this.infoCadastro.value.cpf).replaceAll(/[.-]/g, '')
      );

      this.service.cadastrarUsuario(this.cliente).subscribe();
    } else {
      this.formularioValido = false;
      this.cadastroEfetuado = false;
    }
  }
}
