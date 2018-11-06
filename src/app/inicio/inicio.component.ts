import { Component, OnInit } from '@angular/core';
import { ProdutoService} from '../produto.service';
import { CarrinhoService } from '../carrinho.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../classes/produto';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'abe-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  images: any[];
  URL = 'http://localhost:3000/produtos';
  produtos: Produto[];
  constructor(public produto: ProdutoService, public carrinho: CarrinhoService) { }

  async ngOnInit() {
    this.produtos = await this.produto.obterProdutos().toPromise();
    console.log(this.produtos);
    this.images = [];
    this.images.push({source: '../assets/slide/1.webp', alt: '', title: ''});
    this.images.push({source: '../assets/slide/2.webp', alt: '', title: ''});
  }
}
