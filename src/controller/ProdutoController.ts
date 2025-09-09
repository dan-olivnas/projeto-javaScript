import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private estoqueProdutos: Array<Produto> = new Array<Produto>();
    private _numero: number = 0;

    novoProduto(produto: Produto): void {
        this.estoqueProdutos.push(produto);
        console.log(`O produto ID ${produto.id} - ${produto.nome} foi cadastrado com sucesso!`);
    }
    listarProdutos(): void {
        this.estoqueProdutos.forEach(produto => {
            produto.visualizar();
            console.log('-----------------------------------');
        });
    }
    buscarProduto(id: number): void {
        const produto = this.buscarNoArray(id);
        if (produto !== null) {
            produto.visualizar();
        } else {
            console.log(`Produto ${id} não encontrado!`);
        }
    }
    atualizarProduto(produto: Produto): void {
        const attProduto = this.buscarNoArray(produto.id);
        if (attProduto !== null) {
            this.estoqueProdutos[this.estoqueProdutos.indexOf(attProduto)] = produto;
            console.log(`O produto ${produto.id} foi atualizado com sucesso!`);
        } else {
            console.log(`O produto ${produto.id} não encontrado!`);
        }
    }
    removerProduto(id: number): void {
        const produto = this.buscarNoArray(id);
        if (produto !== null) {
            this.estoqueProdutos.splice(this.estoqueProdutos.indexOf(produto), 1);
            console.log(`O produto ${id} foi removido com sucesso!`);
        } else {
            console.log(`O produto ${id} não foi encontrado!`);
        }
    }
    public buscarNoArray(id: number): Produto | null {
        const produto = this.estoqueProdutos.find(produto => produto.id === id);
        return produto || null;
    }
    public gerarNumero(): number {
        return ++this._numero;
    }
}