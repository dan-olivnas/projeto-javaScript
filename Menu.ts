import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { ProdutoCapilar } from "./src/model/ProdutoCapilar";
import { ProdutoCorporal } from "./src/model/ProdutoCorporal";
import { ProdutoFacial } from "./src/model/ProdutoFacial";

export function main() {
    const produtoController = new ProdutoController();
    let opcao, preco, id, quantidade, tipo: number;
    let nome, tipoCabelo, tipoCorporal, tipoPele: string;

    const tiposProdutos = ['Capilar', 'Corporal', 'Facial'];

    const produtoTeste1 = new ProdutoCapilar(produtoController.gerarNumero(), "Shampoo Anticaspa", 25.90, 50, "Cabelos Oleosos");
    const produtoTeste2 = new ProdutoCorporal(produtoController.gerarNumero(), "Loção Hidratante", 15.90, 30, "Pele Seca");
    const produtoTeste3 = new ProdutoFacial(produtoController.gerarNumero(), "Protetor Solar Facial", 35.50, 20, "Todos os tipos de pele");

    produtoController.novoProduto(produtoTeste1);
    produtoController.novoProduto(produtoTeste2);
    produtoController.novoProduto(produtoTeste3);

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     RD Cosméticos                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar novo produto               ");
        console.log("            2 - Listar todos os produtos em estoque  ");
        console.log("            3 - Buscar produto                       ");
        console.log("            4 - Atualizar dados do produto           ");
        console.log("            5 - Excluir produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                    ",);
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log("RD Acessórios para Celular - 2025")
            sobre();
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log("\nCadastrar novo produto\n");

                console.log(`Digite o nome do produto: `);
                nome = readlinesync.question("");

                console.log(`Digite o preço do produto: `);
                preco = readlinesync.questionFloat("");

                console.log(`Digite a quantidade do produto: `);
                quantidade = readlinesync.questionInt("");

                console.log("\nDigite o tipo do produto: ");
                tipo = readlinesync.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                switch (tipo) {
                    case 1:
                        console.log(`Digite o tipo de cabelo: `);
                        tipoCabelo = readlinesync.question("");
                        produtoController.novoProduto(new ProdutoCapilar(produtoController.gerarNumero(), nome, preco, quantidade, tipoCabelo));
                        keyPress();
                        break;
                    case 2:
                        console.log(`Digite o tipo: `);
                        tipoCorporal = readlinesync.question("");
                        produtoController.novoProduto(new ProdutoCorporal(produtoController.gerarNumero(), nome, preco, quantidade, tipoCorporal));
                        keyPress();
                        break;
                    case 3:
                        console.log(`Digite o tipo de pele: `);
                        tipoPele = readlinesync.question("");
                        produtoController.novoProduto(new ProdutoFacial(produtoController.gerarNumero(), nome, preco, quantidade, tipoPele));
                        keyPress();
                        break;
                } break;
            case 2:
                console.log("\nLista dos produtos em estoque\n");
                produtoController.listarProdutos();
                keyPress();
                break;

            case 3:
                console.log("\nBuscar produto\n");
                console.log(`Digite o ID do produto: `);
                id = readlinesync.questionInt("");
                produtoController.buscarProduto(id);
                keyPress();
                break;

            case 4:
                console.log("\nAtualizar os dados do produto\n");

                console.log(`Digite o ID do produto: `);
                id = readlinesync.questionInt("");

                const produto = produtoController.buscarNoArray(id);

                if (produto !== null) {
                    console.log(`Digite o novo nome do produto: `);
                    nome = readlinesync.question("");

                    console.log(`Digite o novo preço do produto: `);
                    preco = readlinesync.questionFloat("");

                    console.log(`Digite a nova quantidade do produto: `);
                    quantidade = readlinesync.questionInt("");

                    console.log("\nDigite o novo tipo do produto: ");
                    tipo = readlinesync.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                    switch (tipo) {
                        case 1:
                            console.log(`Digite o novo tipo de cabelo: `);
                            tipoCabelo = readlinesync.question("");
                            produtoController.atualizarProduto(new ProdutoCapilar(id, nome, preco, quantidade, tipoCabelo));
                            keyPress();
                            break;
                        case 2:
                            console.log(`Digite o novo tipo: `);
                            tipoCorporal = readlinesync.question("");
                            produtoController.atualizarProduto(new ProdutoCorporal(id, nome, preco, quantidade, tipoCorporal));
                            keyPress();
                            break;
                        case 3:
                            console.log(`Digite o novo tipo de pele: `);
                            tipoPele = readlinesync.question("");
                            produtoController.atualizarProduto(new ProdutoFacial(id, nome, preco, quantidade, tipoPele));
                            keyPress();
                            break;
                    }
                }
                break;

            case 5:
                console.log("\nExcluir produto\n");

                console.log(`Digite o ID do produto: `);
                id = readlinesync.questionInt("");
                const produtoConf = produtoController.buscarNoArray(id);
                if (produtoConf !== null) {
                    const excluir = readlinesync.keyInYN(`Confirma a exclusao do produto ${produtoConf.id} - ${produtoConf.nome} ? `)
                    if (excluir) {
                        produtoController.removerProduto(id);
                    } else {
                        console.log(`Operação cancelada!`);
                    }
                } else {
                    console.log(`Produto ${id} não encontrado!`);
                }
                keyPress();
                break;
            default:
                console.log("\nOpção inválida\n");
                keyPress();
                break;
        }
    }
    function sobre(): void {
        console.log("********************************************************");
        console.log("Projeto desenvolvido por: Dandara Nascimento");
        console.log("Generation Brasil - dandaran@genstudents.org");
        console.log("github.com/dan-olivnas/projeto-javaScript");
        console.log("********************************************************");
    }

    function keyPress(): void {
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }
} main();