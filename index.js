const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("================================");
console.log("          findesc");
console.log("================================");

console.log("\n1 - Adicionar receita");
console.log("2 - Adicionar despesa");
console.log("3 - Ver saldo");
console.log("4 - Sair");

rl.question("\nEscolha uma opção: ", (opcao) => {

    if (opcao === "1") {
        rl.question("Digite o valor da receita: R$ ", (valor) => {
            console.log(`Receita adicionada: R$ ${valor}`);
            rl.close();
        });

    } else if (opcao === "2") {
        rl.question("Digite o valor da despesa: R$ ", (valor) => {
            console.log(`Despesa adicionada: R$ ${valor}`);
            rl.close();
        });

    } else if (opcao === "3") {
        console.log("Seu saldo será mostrado aqui.");
        rl.close();

    } else if (opcao === "4") {
        console.log("Tchau, não esquece de mim ;)!");
        rl.close();

    } else {
        console.log("Essa opção está errada -_-.");
        rl.close();
    }
});
