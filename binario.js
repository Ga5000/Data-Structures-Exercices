// busca binária que retorna todos os números menores e maiores que a chave
function binarySearch(list, key) {
    let initialPosition = 0, finalPosition = list.length - 1;

    while (initialPosition <= finalPosition) {
        let middle = Math.floor((initialPosition + finalPosition) / 2);
        if (list[middle] == key) {
            return middle;
        } else if (list[middle] < key) {
            initialPosition = middle + 1;
        } else {
            finalPosition = middle - 1;
        }
    }
    return -1;
}

let list = [1, 2, 4, 5, 6, 7,10,40,57,80,90,120,400,459];


let higherNs = [];
let lowerNs = [];

let key = 10, position = binarySearch(list, key);

if (position != -1) {
    console.log("Chave encontrada na posição: " + position+"\n");

    for (let i = 0; i < list.length; i++) {
        if (list[i] > key) {
            higherNs.push(list[i]);
        }
    }
    console.log(`Elementos maiores que ${key}: ${higherNs.length}\n`);

    for (let j = 0; j < list.length; j++) {
        if (list[j] < key) {
            lowerNs.push(list[j]);
        }
    }
    console.log(`Elementos menores que ${key}: ${lowerNs.length}`);
} else {
    console.log("Chave não encontrada na lista.");
}
