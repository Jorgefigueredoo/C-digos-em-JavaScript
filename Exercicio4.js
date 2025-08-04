
class carro {
    marca;
    cor;
    preço;
    km;
    autonomia;
    gasto;

    descrever() {
        console.log(`O gasto total foi de ${this.gasto}`)
    }
}



const gol = new carro();
gol.marca = "volksbg";
gol.cor = "Branco";
gol.preço = 5.79;
gol.km = 100;
gol.autonomia = 12
gol.gasto = (gol.km/gol.autonomia)*gol.preço

gol.descrever();

