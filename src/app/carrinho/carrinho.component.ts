import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import {Produto } from '../classes/produto';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'abe-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  compras: Produto[];
  total: number;
  constructor(public carrinho: CarrinhoService, public rotas: ActivatedRoute) {
    this.compras = this.carrinho.obterCompras();
   }

  ngOnInit() {
    const op = this.rotas.snapshot.paramMap.get('op');
    const id = +this.rotas.snapshot.paramMap.get('id');
    this.realizarOperacao(op, id);
  }
  realizarOperacao(op, id) {
    switch (op) {
      case 'add':
        this.carrinho.adicionar(id);
        console.log(this.carrinho.total);
    }
  }

}
