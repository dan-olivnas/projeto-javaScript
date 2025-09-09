import { Produto } from "./Produto";

export class ProdutoCorporal extends Produto {
    private _tipoCorporal: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, tipoCorporal: string) {
        super(id, nome, preco, quantidade);
        this._tipoCorporal = tipoCorporal;
    }

    public get tipoCorporal() {
        return this._tipoCorporal;
    }

    public set tipoCorporal(tipoCorporal: string) {
        this._tipoCorporal = tipoCorporal;
    }
    public visualizar() : void {
    super.visualizar();
    console.log(`Tipo: ${this._tipoCorporal}`);
    }
}