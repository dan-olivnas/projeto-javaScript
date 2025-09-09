import { Produto } from "./Produto";

export class ProdutoFacial extends Produto {
    private _tipoPele: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, tipoPele: string) {
        super(id, nome, preco, quantidade)
        this._tipoPele = tipoPele;
    }

    public get tipoPele() {
        return this._tipoPele;
    }

    public set tipoPele(tipoPele: string) {
        this._tipoPele = tipoPele;
    }

    public visualizar() : void {
    super.visualizar();
    console.log(`Tipo de pele: ${this._tipoPele}`);
    }
}