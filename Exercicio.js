const preçoGasolina= 6.66;
const preçoEtanol= 5.79;
const combustivel= ("Gasolina");
const KMporlitros=10;
const distancia= 100;
let valorGasto;


if(combustivel==='Etanol') {
 valorGasto= (distancia/KMporlitros)*preçoEtanol;
    console.log(valorGasto.toFixed(2));
}

else if (combustivel=== 'Gasolina') {
 valorGasto= (distancia/KMporlitros)*preçoGasolina;
    console.log(valorGasto.toFixed(2));  
}
else {
console.log("Essse tipo de combustivél não está disponivél");
}




