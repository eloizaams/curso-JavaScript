// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    },
};

console.log(animal.nome);

animal.latir();

const pessoa = {
    nome: "Eloiza",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Rafael");
console.log(pessoa.getNome());

// 2 - Prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(console.log(Object.getPrototypeOf(mySecondObject)) === myObject);

// 3 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bullDog = Object.create(cachorro);
bullDog.raca = "Bulldog";
console.log(bullDog);

// 4 - Função como classe
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}
const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 5 - funções como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// 6 - Métodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuuu");
};
console.log(Cachorro.prototype);

husky.uivar();

// 7 - Casses ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(
            `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`
        );
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);
scania.descreverCaminhao();

//não funciona
Caminhao.motor = 4;
const c2 = new Caminhao(4, "Preta");
console.log(c2);
console.log(c2.motor);

//com prototype - funciona!
Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "Verde");
console.log(c3);
console.log(c3.motor);

// 8 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const eloiza = new Humano("Eloiza", 43);
console.log(eloiza);

console.log(Humano.prototype.idade);
Humano.prototype.idade = "não definida";

console.log(eloiza.idade);
console.log(Humano.prototype.idade);

// 9 - symbol
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 10 - getters e setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post", "Um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);
myPost.adicionarTags = "programação, javaScript, js";
console.log(myPost);

// 11 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// 12 - instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Lobo);
