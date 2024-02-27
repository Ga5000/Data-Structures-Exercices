
function sumNs(n){
    return (n == 0) ? 0 : n + sumNs(n-1);
}
let n = 10
console.log(sumNs(n));