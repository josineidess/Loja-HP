import { Injectable } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './classes/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  compras: Produto[];
  produto: Produto[];
  total: number[];
  t: number;
  constructor(private estoque: ProdutoService) {
    this.total = [];
    // A cons session pega o objeto carrinho e salva na memória cache
    const session = sessionStorage.getItem('carrinho');
    console.log(session);
    // Se tiver alguma coisa na sessão a lista inicia com o que estiver dentro, se não ela inicia vazia
    if (session) {
      this.compras = JSON.parse(session);
    } else {
      this.compras = [];
    }
   }

  /**
   * Procura se existe um produto no estoque com
   * o 'id' passado. Caso exista, insere o produto
   * na lista de compras (this.compras). Retorna
   * 'true' se foi adicionado e 'false' caso contrário.
  */
  adicionar (id: number): boolean {
    if (this.produto = this.estoque.produtos.filter(p => p.id === id)) {
      this.produto.forEach(element => {
      this.compras.push(element);
      // o objeto carrinho que está na lista compras é salvo toda memória toda vez que o método for chamado
      sessionStorage.setItem('carrinho', JSON.stringify(this.compras));
      });
     return true;
    }
    return false;
  }
  obterCompras() {
    return this.compras;
  }
}
