import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosServiceService } from '../services/produtos-service.service';
import { Produto } from '../models/produto';
import { CestaService } from '../services/cesta.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Cesta } from '../models/cesta';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css'],
})
export class ProdutoDetalheComponent {
  codigoProduto: Number;
  produto: Produto = new Produto();
  codcliente: Number | null;

  constructor(
    private route: ActivatedRoute,
    private service: ProdutosServiceService,
    private cestasService: CestaService,
    private storage: LocalStorageService
  ) {}

  ngAfterContentInit() {
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

  adicionarCarrinho() {
    if (!this.storage.isLogged) {
      this.cestasService
        .postItem(this.storage.getSession(), this.codigoProduto, null)
        .subscribe();
    } else {
      this.cestasService.getCesta(this.storage.getSession()).subscribe({
        next: (data: Array<Cesta>) => {
          this.codcliente = data[0].codcliente;
          this.cestasService
            .postItem(
              this.storage.getSession(),
              this.codigoProduto,
              this.codcliente
            )
            .subscribe();
        },
      });
    }
  }
}
