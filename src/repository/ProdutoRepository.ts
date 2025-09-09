import { Produto } from "../model/Produto";

export interface ProdutoRepository {
   
    novoProduto(produto: Produto): void;
    listarProdutos(): void;
    buscarProduto(id: number): void;
    atualizarProduto(produto: Produto): void;
    removerProduto(id: number): void;
}