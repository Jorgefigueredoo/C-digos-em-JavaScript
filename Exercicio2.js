const nota1= 5;
const nota2= 5;
const nota3=8;
const media= (nota1+nota2+nota3)/3;
    console.log("Media:",media);


if(media >=7) {
    console.log("Aprovado...");
}

else if(media <7 && media >=5) {
    console.log("Recuperação...");
}

else {
    console.log("Reprovado...");
}