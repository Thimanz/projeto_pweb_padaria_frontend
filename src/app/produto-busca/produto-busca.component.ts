import { Component } from '@angular/core';
import produtos from '../produtos.json';

interface produtos {
  descricao: String;
  imagem: String;
  descricaoCompleta: String;
  preco: String;
}

@Component({
  selector: 'app-produto-busca',
  templateUrl: './produto-busca.component.html',
  styleUrls: ['./produto-busca.component.css'],
})
export class ProdutoBuscaComponent {
  produtosObject = produtos;   
}
