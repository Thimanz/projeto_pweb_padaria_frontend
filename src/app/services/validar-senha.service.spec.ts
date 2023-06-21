import { TestBed } from '@angular/core/testing';

import { ValidarSenhaService } from './validar-senha.service';

describe('ValidarSenhaService', () => {
  let service: ValidarSenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarSenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
