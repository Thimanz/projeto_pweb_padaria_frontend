import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {
    path: 'vitrine',
    component: VitrineComponent,
  },
  // {
  //   path: '/produto-detalhe',
  //   component: ProdutoDetalhe,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
