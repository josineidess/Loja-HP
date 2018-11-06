import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContaComponent } from './conta/conta.component';
import { QuizComponent } from './quiz/quiz.component';
import { SobreComponent } from './sobre/sobre.component';
import { CarrinhoService } from './carrinho.service';
import { ProdutoService } from './produto.service';
import { NotfoudComponent } from './notfoud/notfoud.component';
import { AppRoutingModule } from './/app-routing.module';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarrinhoComponent,
    ContaComponent,
    QuizComponent,
    SobreComponent,
    NotfoudComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    GalleriaModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [CarrinhoService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
