import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidarSenhaService {
  static validarSenha: ValidatorFn = function (control: AbstractControl) {
    const senha = control.parent?.get('senha');
    const confirmarSenha = control.parent?.get('confirmarSenha');
    console.log(confirmarSenha);

    return senha?.value === confirmarSenha?.value
      ? null
      : { msg: 'senhas diferentes' };
  };

  constructor() {}
}
