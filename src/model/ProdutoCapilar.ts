import { Produto } from "./Produto";

export class ProdutoCapilar extends Produto {
    private _tipoCabelo: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, tipoCabelo: string) {
        super(id, nome, preco, quantidade);
        this._tipoCabelo = tipoCabelo;
    }

    public get tipoCabelo() {
        return this._tipoCabelo;
    }

    public set tipoCabelo(tipoCabelo: string) {
        this._tipoCabelo = tipoCabelo;
    }

    public visualizar() : void {
    super.visualizar();
    console.log(`Tipo de cabelo: ${this._tipoCabelo}`);
    }
}
