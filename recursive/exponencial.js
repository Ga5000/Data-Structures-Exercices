
function exponencial(base,expoente){
    return (expoente == 0) ? 1 : base * exponencial(base,expoente-1);
}

let base = 2, expoente = 4;

console.log(exponencial(base,expoente));
