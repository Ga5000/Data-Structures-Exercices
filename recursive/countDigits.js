
function count(n){
    return (n < 10) ? 1 :  1 + count(n/10);
}
let n = 10000;
console.log(count(n));