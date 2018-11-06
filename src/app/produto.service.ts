import { Injectable } from '@angular/core';
import { Produto } from './classes/produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[];
  URL = 'http://localhost:3000/produtos';
  constructor(public http: HttpClient) {
  }
  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }
}
