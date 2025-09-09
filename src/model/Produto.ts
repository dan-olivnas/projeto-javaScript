// Classe produto

export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _preco: number;
  private _quantidade: number;

  constructor(id: number, nome: string, preco: number, quantidade: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._quantidade = quantidade;
  }
  public get id() {
    return this._id;
  }

  public set id(numero: number) {
    this._id = numero;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get preco() {
    return this._preco;
  }

  public set preco(preco: number) {
    this._preco = preco;
  }

  public get quantidade() {
    return this._quantidade;
  }

  public set quantidade(numero: number) {
    this._quantidade = numero;
  }

  public visualizar() : void {
    console.log(`ID: ${this._id}`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Preço unitário: R$ ${this._preco.toFixed(2)}`);
    console.log(`Quantidade disponível: ${this._quantidade}`);
  }
}
