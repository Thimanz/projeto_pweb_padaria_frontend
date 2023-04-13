import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VitrineComponent,
    ProdutoBuscaComponent,
    CestaComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
