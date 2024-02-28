
function fatorial(n){
    return (n == 1 || n == 0) ? 1 : n*fatorial(n-1);
}

function exponencial(x,expoente){
    return (expoente == 0) ? 1 : x * exponencial(x,expoente-1);
}

function somatoria(x,n){
    return (n==0) ? 1 : exponencial(x, n) / fatorial(n) + somatoria(x, n - 1);
}

let x = 3, n = 4;
console.log(somatoria(x,n));