import { Component } from '@angular/core';
import { ProdutosServiceService } from '../services/produtos-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-busca',
  templateUrl: './produto-busca.component.html',
  styleUrls: ['./produto-busca.component.css'],
})
export class ProdutoBuscaComponent {
  produtosObject: Object;
  descricaoProduto: String;

  constructor(
    private route: ActivatedRoute,
    private service: ProdutosServiceService
  ) {
    this.descricaoProduto = String(
      this.route.snapshot.paramMap.get('descricao')
    );
    this.listar();
  }

  listar() {
    this.service.getBuscaProduto(this.descricaoProduto).subscribe({
      next: (data: Object) => {
        this.produtosObject = data;
      },
    });
  }
  returnZero = () => 0;
}
