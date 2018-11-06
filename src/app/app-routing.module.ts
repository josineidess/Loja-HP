import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContaComponent } from './conta/conta.component';
import { QuizComponent } from './quiz/quiz.component';
import { SobreComponent } from './sobre/sobre.component';
import { NotfoudComponent } from './notfoud/notfoud.component';

const rotas: Routes = [
  {path: 'inicio', component: InicioComponent},
    {path: 'carrinho/:op/:id', component: CarrinhoComponent},
    {path: 'conta', component: ContaComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'quiz', component: QuizComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: NotfoudComponent}
];


@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
