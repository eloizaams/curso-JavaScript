// // arrays
// const lista = [1, 2, 3, 4, 5];
// console.log(lista);
// console.log(typeof lista);

// const listItems = [1, "Nome", true, lista];
// console.log(listItems);
// console.log(typeof listItems);

// // acessar itens da lista
// const arr = ["a", "b", "c", "d"];
// console.log(arr[2]);
// console.log(arr[12]);

// //propriedades
// const numbers = [5, 3, 4];
// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Eloiza";
// console.log(myName.length);

// //métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);

// text = "Algum texto";
// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase);
// console.log(text.indexOf("g"));

// //objetos
// const person = {
//     myName: "Eloiza",
//     age: 43,
//     job: "Programer",
// };
// console.log(person);
// console.log(person.myName);
// console.log(typeof person);

// //criando e removendo propriedades
// const car = {
//     brand: "VW",
//     engine: 2.0,
//     model: "Tiguan",
//     km: 20000,
// };
// console.log(car);
// car.doors = 4;
// console.log(car);
// delete car.km;
// console.log(car);

// //cópia de objetos
// const obj = {
//     a: "teste",
//     b: true,
// };
// console.log(obj instanceof Object);

// const obj2 = {
//     c: [],
// };

// Object.assign(obj2, obj);
// console.log(obj2);

// //objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));
// console.log(Object.keys(car));
// console.log(Object.entries(obj));

// // mutação de objetos
// const a = {
//     name: "Eloiza",
// };

// const b = a;
// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 43;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// //loops em arrays
// const users = ["Mateus", "João", "Pedro", "Miguel"];
// for (let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// //push e pop
// const array = ["a", "b", "c"];
// array.push("d");
// console.log(array);
// console.log(array.length);
// array.pop();
// console.log(array);
// console.log(array.length);
// const itemRemovido = array.pop();
// console.log(itemRemovido);
// console.log(array);
// array.push("z", "x", "y");
// console.log(array);

// //shift e unshift
// const letters = ["a", "b", "c"];
// letters.unshift("d");
// console.log(letters);
// console.log(letters.length);
// letters.shift();
// console.log(letters);
// console.log(letters.length);
// const itemRemovido2 = letters.shift();
// console.log(itemRemovido2);
// console.log(letters);
// letters.unshift("z", "x", "y");
// console.log(letters);

// // indexOf e lastIndexOf
// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));

// //slice
// const testSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testSlice.slice(2, 4);
// console.log(subArray);
// console.log(testSlice);

// const subArray2 = testSlice.slice(10, 20);
// console.log(subArray2);

// const subArray3 = testSlice.slice(2);
// console.log(subArray3);

// //foreach
// const nums = [1, 2, 3, 4, 5, 6, 7];

// nums.forEach((numero) => {
//     console.log(`O número é : ${numero}`);
// });

// const posts = [
//     { title: "Primeiro Post", category: "PHP" },
//     { title: "Segundo Post", category: "JavaScript" },
//     { title: "Terceiro Post", category: "Python" },
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
// });

// // includes
// const brands = ["BMW", "Fiat", "VW"];

// console.log(brands.includes("Fiat"));
// console.log(brands.includes("Kia"));

// //reverse
// const reverseTest = [1, 2, 3, 4, 5];
// reverseTest.reverse;
// console.log(reverseTest);

// //Métodos de String
// // - Trim
// const trimTeste = "   testando \n   ";
// console.log(trimTeste);

// console.log(trimTeste.trim());
// console.log(trimTeste.length);
// console.log(trimTeste.trim().length);

// // - padStart padEnd
// const testPadStart = "1";

// const newNumber = testPadStart.padStart(4, "0");
// console.log(testPadStart);
// console.log(newNumber);

// const testPadEnd = newNumber.padEnd(9, "0");
// console.log(testPadEnd);

// // - split
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayFrase = frase.split(" ");
// console.log(arrayFrase);

// // - join
// const fraseDeNovo = arrayFrase.join(" ");
// console.log(fraseDeNovo);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
// console.log(fraseDeCompra);

// // - repeat
// const palavra = "Testando ";
// console.log(palavra.repeat(5));

// // rest operator ...
// const somaInfinita = (...args) => {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// };

// console.log(somaInfinita(1, 2, 3));
// console.log(somaInfinita(20, 34, 43, 100, 58, 5, 125, 87));

// // for...of
// const somaInfinita2 = (...args) => {
//     let total = 0;
//     for (num of args) {
//         total += num;
//     }
//     return total;
// };

// console.log(somaInfinita2(1, 2, 3));
// console.log(somaInfinita2(20, 34, 43, 100, 58, 5, 125, 87));

//destructuring em objetos
const userDetails = {
    firstName: "Eloiza",
    lastName: "Souza",
    job: "Programadora",
};

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

// renomear as variáveis
const { firstName: primeiroNome } = userDetails;
console.log(firstName);
console.log(primeiroNome);

//destructuring em arrays
const myList = ["Avião", "Carro", "Submarino"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// JSON
const myJson =
    '{"name":"Eloiza", "age": 43, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);
console.log(typeof myJson);

// convertendo o JSON
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// json inválido
const badJson = '{"name": Eloiza, "age": 31 }';
//const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);
