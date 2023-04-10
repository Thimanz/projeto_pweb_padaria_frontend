import { Component } from '@angular/core';
import produtos from '../produtos.json';

@Component({
  selector: 'app-produto-busca',
  templateUrl: './produto-busca.component.html',
  styleUrls: ['./produto-busca.component.css'],
})
export class ProdutoBuscaComponent {
  produtosObject = produtos;
  returnZero = () => 0;
}
