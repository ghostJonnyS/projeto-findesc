const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let receita = 0;
let despesa = 0;


console.log("================================");
console.log("          findesc");
console.log("================================");
console.log("\n1 - Adicionar receita");
console.log("2 - Adicionar despesa");
console.log("3 - Ver saldo");
console.log("4 - Sair");

function menu() {

rl.question("\nEscolha uma opção: ", (opcao) => {

    if (opcao === "1") {
        rl.question("Digite o valor da receita: R$ ", (valor) => {
            receita += Number(valor);
            console.log(`Receita adicionada: R$ ${receita}`);
            menu();
        });

    } else if (opcao === "2") {
        rl.question("Digite o valor da despesa: R$ ", (valor) => {
            despesa += Number(valor);
            console.log(`Despesa adicionada: R$ ${despesa}`);
            menu();
        });

    } else if (opcao === "3") {
        const saldo = receita - despesa;

        console.log(`Receitas: R$ ${receita.toFixed(2)}`);
        console.log(`Despesas: R$ ${despesa.toFixed(2)}`);
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);

        menu();

    } else if (opcao === "4") {
        console.log("Tchau, não esquece de mim ;)!");
        rl.close();

    } else {
        console.log("Essa opção está errada -_-.");
        rl.close();
    }
});

}

menu(); 
