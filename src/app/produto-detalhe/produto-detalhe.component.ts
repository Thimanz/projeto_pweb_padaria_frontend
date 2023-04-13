import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import produtos from '../produtos.json';

interface Produto {
  imagem: String;
  descricao: String;
  preco: Number;
  detalhes: String;
}

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css'],
})
export class ProdutoDetalheComponent {
  nomeProduto: string = '';
  produto: Produto;
  constructor(private route: ActivatedRoute) {
    this.nomeProduto = String(this.route.snapshot.paramMap.get('produto'));
    ({ [this.nomeProduto]: this.produto = this.produto } = produtos);
  }
}
