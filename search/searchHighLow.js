// use a função desenvolvida acima para, dada uma lista ordenada de n números inteiros, uma chave x e dois outros inteiros y e z
// retornar o numero de elementos da list que são maiores ou iguais que y e o numero de elementos menores ou iguais a z
function sequencialSearch(list, key) {
    let indexes = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] == key) {
            indexes.push(i);
        }
    }
    return indexes;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 54, 67, 89, 90, 91, 100];
let key = 1, y = 12, z = 80, listY = [], listZ = [];

let searchResult = sequencialSearch(list, key);

if (searchResult.length === 0) {
    console.log("Chave não encontrada na lista.");
} else {
    console.log("Chave encontrada nas posições: " + searchResult);
}

for (let i = 0; i < list.length; i++) {
    if (list[i] >= y) {
        listY.push(list[i]);
    }
    if (list[i] <= z) {
        listZ.push(list[i]);
    }
}

console.log(`\n Elementos maiores ou iguais a ${y}: ${listY.length} elementos`);
console.log(`\n Elementos menores ou iguais que ${z}: ${listZ.length} elementos`);



function binarySearch(list, key) {
    let initialPosition = 0, finalPosition = list.length - 1, startIndex = -1, endIndex = -1, indexes = [];

    while (initialPosition <= finalPosition) {
        let middle = Math.floor((initialPosition + finalPosition) / 2);
        if (list[middle] > key) {
            finalPosition = middle - 1;
        } else if (list[middle] == key) {
            startIndex = middle;
            finalPosition = middle - 1;
        } else {
            initialPosition = middle + 1;
        }
    }

    initialPosition = 0;
    finalPosition = list.length - 1;

    while (initialPosition <= finalPosition) {
        let middle = Math.floor((initialPosition + finalPosition) / 2);
        if (list[middle] > key) {
            finalPosition = middle - 1;
        } else if (list[middle] == key) {
            endIndex = middle;
            initialPosition = middle + 1;
        } else {
            initialPosition = middle + 1;
        }
    }

    if (startIndex !== -1 && endIndex !== -1) { //se startIndex e endIndex são achados adicione os indexes no array
        for (let i = startIndex; i <= endIndex; i++) {
            indexes.push(i);
        }
    }
    return indexes;
}

let list2 = [1, 2, 3, 4, 5, 10, 23, 24, 90, 10, 100, 430, 900, 10];
let key2 = 10, y2 = 12, z2 = 80, listY2 = [], listZ2 = [];;
let searchResult2 = binarySearch(list2.sort((a, b) => a - b), key2); // ordena o array de forma crescente e passa a lista ordenada e a chave como parametros

if (searchResult2.length === 0) {
    console.log("Chave não encontrada na lista.");
} else {
    console.log("Chave encontrada nas posições: " + searchResult2);
}

for (let i = 0; i < list2.length; i++) {
    if (list2[i] >= y2) {
        listY2.push(list2[i]);
    }
    if (list2[i] <= z2) {
        listZ2.push(list2[i]);
    }
}

console.log(`\n Elementos maiores ou iguais a ${y2}: ${listY2.length} elementos`);
console.log(`\n Elementos menores ou iguais que ${z2}: ${listZ2.length} elementos`);
