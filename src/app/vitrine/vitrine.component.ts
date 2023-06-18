import { Component } from '@angular/core';
import { ProdutosServiceService } from '../services/produtos-service.service';

interface produto {
  descricao: String;
  imagem: String;
  descricaoCompleta: String;
}

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
})
export class VitrineComponent {
  produtosObject: Object;

  constructor(private service: ProdutosServiceService) {
    this.listar();
  }

  listar() {
    this.service.getProdutos().subscribe({
      next: (data: Object) => {
        this.produtosObject = data;
      },
    });
  }
  returnZero = () => 0;
}
