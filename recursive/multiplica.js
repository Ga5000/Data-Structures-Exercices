
function multi(number,numberM){
     return (number == 0 || numberM == 0) ? 0 : number + multi(number,numberM-1);
}

let number = 5, numberM = 2;
console.log(multi(number,numberM));
