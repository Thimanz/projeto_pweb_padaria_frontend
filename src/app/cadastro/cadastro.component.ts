import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  infoCadastro: FormGroup;

  inputEmail: String;
  formularioValido: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

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
  onClick() {
    if (this.infoCadastro.valid) {
      this.formularioValido = true;
    } else {
      this.formularioValido = false;
    }
  }
}
