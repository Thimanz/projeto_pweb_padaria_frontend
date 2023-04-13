import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: '/vitrine', pathMatch: 'full' },
  {
    path: 'vitrine',
    component: VitrineComponent,
  },
  {
    path: 'produto-detalhe/:produto',
    component: ProdutoDetalheComponent,
  },
  {
    path: 'produto-busca',
    component: ProdutoBuscaComponent,
  },
  {
    path: 'cesta',
    component: CestaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
