function imparPar(n, number) {
    return (number <= n) ? (number === 0) ? "par" : imparPar(n, (number < 0) ? -number - 1 : number - 1) : "negativo";
}

let n = 10, number = 0;
console.log(imparPar(n, number));
