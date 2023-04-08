import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';

const routes: Routes = [
  {
    path: 'vitrine',
    component: VitrineComponent,
  },
  // {
  //   path: '/produto-detalhe',
  //   component: ProdutoDetalhe,
  // },
  {
    path: 'produto-busca',
    component: ProdutoBuscaComponent,
  },
  {
    path: 'cesta',
    component: CestaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
