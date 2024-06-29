// //  Variáveis
// let nome = "Eloiza";

// console.log(nome);

// nome = "Eloiza Souza"

// console.log(nome);

// const idade = 43

// console.log(idade)

// // idade = 21

// console.log(typeof nome)
// console.log(typeof idade)

// let a = 10,
//     b = 20,
//     c = 30;

// console.log(a, b, c)

// // Funções

// // const x = prompt("Digite um numero")
// // console.log(x)

// // alert("Este é um alerta");
// //alert(`a idade é ${idade} anos`)

// // Math
// console.log(Math.max(3, 8, 15, 3))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(6.58))

// // Console
// console.log("log");
// console.error("Erro")
// console.warn("Aviso")

// // If Else

// const m = 10;
// if (m > 5) {
//     console.log("M é maior que 5")
// }

// const user = "João";
// if (user === "João") {
//     console.log(`Olá ${user}`)
// }

// if (user === "Maria") {
//     console.log(`Olá ${user}`)
// } else {
//     console.log(`O nome do usuário é ${user}`)
// }

// Estruturas de repetição

let p = 0;
while (p < 5) {
    console.log(`repetindo ${p}`);
    p = p + 1;
}

let o = 10;
do {
    console.log(`valor de o: ${o}`);
    o--;
} while (o > 1);

for (let t = 0; t < 10; t++) {
    console.log("repetindo algo...");
}

for (let t = 0; t < 10; t++) {
    console.log("repetindo algo até o break...");
    if (t === 5) {
        break;
    }
}

for (let t = 0; t < 10; t++) {
    if (t % 2 === 0) {
        console.log("Número par");
        continue;
    }
    console.log(t);
}

const job = "Advogado";
switch (job) {
    case "Programador":
        console.log("Você é um Programdor");
        break;
    case "Advogado":
        console.log("Você é um Advogado");
        break;
    case "Engenheiro":
        console.log("Você é um Engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}
