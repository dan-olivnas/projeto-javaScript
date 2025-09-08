// Classe produto

export abstract class Produto {
  private _id: number;
  private _produto: string;
  private _preco: number;
  
constructor(id: number, produto: string, preco: number) {
    this._id = id;
    this._produto = produto;
    this._preco = preco;
  }
public get id() {
  return this._id;
  }

public set id(numero: number) {
  this._id = numero;
  }

public get produto() {
  return this._produto;
  }

public set produto(produto: string) {
  this._produto = produto;
  }

public get preco() {
  return this._preco;
  }

public set preco(preco: number) {
  this._preco = preco;
  }

public adicionar(produto){
    this.produto.push(produto);
    console.log(`Produto "${produto.nome}" adicionado com sucesso!`);
  }

}
  atualizar(id: Id): void {
    let buscarProduto = this.buscarProduto(id.numero);

    if (buscarProduto != null) {
      this.buscarProduto[this.buscarProduto.indexOf(buscarProduto)] = conta;
      console.log("\n O produto ID: " + id + " foi atualizado com sucesso!");
    } else
      console.log("\nO produto ID: " + id + " não foi encontrado!");
  }
  excluir(numero: number): void {
    let buscarProduto = this.buscarProduto(numero);

    if (buscarProduto != null) {
      this.buscarProduto.splice(this.buscarProduto.indexOf(buscarProduto), 1);
      console.log("\nO produto numero: " + id + " foi excluído com sucesso!");
    } else {
      console.log("\nO produdo ID: " + id + " não foi encontrado!",);
    }
}


}
