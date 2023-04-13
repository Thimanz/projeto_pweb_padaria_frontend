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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  infoLogin: FormGroup;
  inputEmail: String;
  formularioValido: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    function validarEmail(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        const emailValido =
          /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(
            value
          );

        return !emailValido ? { emailValido: true } : null;
      };
    }
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
          Validators.pattern(/[A-z\s]{4,50}/),
        ]),
      ],
    });
  }
  onClick() {
    if (this.infoLogin.valid) {
      this.formularioValido = true;
    } else {
      this.formularioValido = false;
    }
  }
}
