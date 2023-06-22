import { Component } from '@angular/core';
import { CestaService } from '../services/cesta.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Cesta } from '../models/cesta';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css'],
})
export class CestaComponent {
  carrinho: Array<Cesta>;
  valorTotal: Number = 0;

  constructor(
    private service: CestaService,
    private storage: LocalStorageService
  ) {
    this.listarCarrinho();
  }

  listarCarrinho() {
    this.service.getCesta(String(this.storage.getSession())).subscribe({
      next: (data: Array<Cesta>) => {
        this.carrinho = data;
        this.carrinho.forEach((item) => {
          this.valorTotal =
            this.valorTotal.valueOf() + item.valortotal.valueOf();
        });
      },
    });
  }
}
