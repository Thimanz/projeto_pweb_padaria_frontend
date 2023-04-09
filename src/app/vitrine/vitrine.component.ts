import { Component } from '@angular/core';
import produtos from '../produtos.json';

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
  produtosObject = produtos;
}
