// // funções
// function minhaFuncao() {
//     console.log("Testando a função");
// }

// minhaFuncao();

// //desta forma a função não pode ser sobrescrita
// const minhaFuncaoEmariavel = function () {
//     console.log("Função em variável");
// };

// minhaFuncaoEmariavel();

// // função com parâmetro
// function funcaoComParametro(txt) {
//     console.log(`Imprimindo ${txt}`);
// }

// funcaoComParametro("Parâmetro");

// // retorno das funções
// function soma(a, b) {
//     return a + b;
// }

// const resultado = soma(10, 20);
// console.log(resultado);

// // escopo das funções
// let y = 20;

// function testandoEscopo() {
//     let y = 10;
//     console.log(`O valor de y DENTRO DA FUNÇÂO é: ${y}`);
// }

// console.log(`O valor de y FORA DA FUNÇÂO é: ${y}`);
// testandoEscopo();

// // arrow (=>)function
// const testeArrow = () => {
//     console.log("Esta é uma arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//     if (n % 2 === 0) {
//         console.log("Par");
//         return;
//     }
//     console.log("Ímpar");
// };
// parOuImpar(10);
// parOuImpar(5);

// const raizQuadrada = (x) => {
//     return x * x;
// };
// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2(5));

// const helloWorld = () => console.log("Hello World");
// helloWorld();

// // parâmetro opcional
// const multiplication = function (m, n) {
//     if (n === undefined) {
//         return m * 2;
//     }
//     return m * n;
// };
// console.log(multiplication(10));
// console.log(multiplication(10, 8));

// const greeting = (name) => {
//     if (name) {
//         console.log(`Olá ${name}`);
//         return;
//     }
//     console.log(`Olá`);
// };

// greeting();
// greeting("Eloiza");

// argumento com valor defaul
const customGreeting = (name, greet = "Olá") => {
    if (name) {
        return `${greet}, ${name}`;
    }
};

console.log(customGreeting("João"));
console.log(customGreeting("Maria", "Bom dia"));

// closure
function someFunction() {
    let txt = "Alguma coisa";
    function display() {
        console.log(txt);
    }
    display();
}
someFunction();

const multiplicationClosure = (n) => {
    return (n) => {
        return n * n;
    };
};
const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// recursão
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar");
    } else {
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
};
untilTen(100, 9);
