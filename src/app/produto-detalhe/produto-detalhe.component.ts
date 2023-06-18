import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import produtos from '../produtos.json';
import { ProdutosServiceService } from '../services/produtos-service.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css'],
})
export class ProdutoDetalheComponent {
  codigoProduto: Number;
  produto: Produto = new Produto();
  constructor(
    private route: ActivatedRoute,
    private service: ProdutosServiceService
  ) {}

  ngOnInit() {
    const codigo = Number(this.route.snapshot.queryParamMap.get('codigo'));
    this.codigoProduto = codigo;
    this.getProduto();
  }

  getProduto() {
    this.service.getProduto(this.codigoProduto).subscribe({
      next: (data: Produto) => {
        this.produto.descricao = data.descricao;
        this.produto.detalhes = data.detalhes;
        this.produto.imagem = data.imagem;
        this.produto.preco = data.preco;
      },
    });
  }
}
