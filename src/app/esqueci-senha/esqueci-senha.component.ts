import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
})
export class EsqueciSenhaComponent implements OnInit {
  infoEsqueci: FormGroup;
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
    if (this.infoEsqueci.valid) {
      this.formularioValido = true;
    } else {
      this.formularioValido = false;
    }
  }
}
