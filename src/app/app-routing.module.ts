import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
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

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'esqueci-senha',
    component: EsqueciSenhaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
