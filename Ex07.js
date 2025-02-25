let numero = [1, 3, 7];

let maior = numero[0];

for(let i=1; i<numero.length; i++){
    if(numero[i] > maior){
        maior = numero[i];
    }
}

console.log(maior);