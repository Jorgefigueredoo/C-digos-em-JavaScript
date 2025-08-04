
class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const jorge = new pessoa();
jorge.nome = "Jorge Antonio de Lima Figueredo";
jorge.idade = 19;

const analu = new pessoa();
analu.nome = "Ana Luisa Cabral";
analu.idade = 17;


jorge.descrever();
analu.descrever();
