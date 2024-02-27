
function commomDiv(n1,n2){
    return (n2 == 0) ? n1 : commomDiv(n2,n1%n2);
}
let n1 = 12, n2 = 18;
console.log(commomDiv(n1,n2));
