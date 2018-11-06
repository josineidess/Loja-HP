export class Produto {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
    descricao: string;
    estoque: number;
    constructor(id: number, nome: string, preco: number, imagem: string, descricao: string , quantidade: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
        this.descricao = descricao;
        this.estoque = quantidade;
    }
}
