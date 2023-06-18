import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VitrineComponent,
    ProdutoBuscaComponent,
    CestaComponent,
    CadastroComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    ProdutoDetalheComponent,
    MenuComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
