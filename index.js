const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("================================");
console.log("    findesc    ");
console.log("================================");

console.log("\n1 - Adicionar receita");
console.log("2 - Adicionar despesa");
console.log("3 - Ver saldo");
console.log("4 - Sair");

rl.question("\nEscolha uma opção: ", (opcao) => {

    if (opcao === "1") {
        console.log("adicionando receita.");
    } 
    else if (opcao === "2") {
        console.log("adicionando despesa.");
    } 
    else if (opcao === "3") {
        console.log("Seu saldo será mostrado aqui.");
    } 
    else if (opcao === "4") {
        console.log("tchau não esquece de mim;)!");
    } 
    else {
        console.log("essa opcão está errada-_-.");
    }

    rl.close();
});
