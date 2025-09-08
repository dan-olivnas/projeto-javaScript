import readlinesync = require("readline-sync");

    let opcao, preco, id: number;
    let produto: string;

    while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("             RD Acessórios para Celular              ");
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
            break;
    
        case 2:
            console.log("\nListar todos os produtos em estoque\n");
            break;
       
        case 3:
            console.log("\nBuscar produto\n");
            break;
        
        case 4:
            console.log("\nAtualizar dados do produto\n");
            break;

        case 5:
            console.log("\nExcluir produto\n");
            break;  

        default:
            console.log("\nOpção inválida\n");
            break;
    }

function sobre(): void {
console.log("********************************************************");
console.log("Projeto desenvolvido por: Dandara Nascimento");
console.log("Generation Brasil - dandaran@genstudents.org");
console.log("github.com/dan-olivnas/projeto-javaScript");
console.log("********************************************************");
}
}

