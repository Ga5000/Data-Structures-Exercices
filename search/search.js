// refazer as funcs de busca binária e sequencial assumindo que a lista possui chaves repetidas,
// retornar uma lista com todas as posições onde a chave foi encontrada. se não encontrada retornar uma lista vazia

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

let list = [1, 2, 3, 4, 5, 10, 23, 24, 90, 10, 100, 430, 900, 10];
let key = 10;
let positions = binarySearch(list.sort((a, b) => a - b), key); // ordena o array de forma crescente e passa a lista ordenada e a chave como parametros

if (positions.length > 0) {
    console.log("Chave encontrada nas posições: " + positions); // o resutado não será o mesmo que sequencial search por conta do array estar ordenado
} else {
    console.log("Chave não encontrada");
}


function sequencialSearch(list, key) {
    let indexes = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] == key) {
            indexes.push(i);
        }
    }
    return indexes;
}

let list2 = [1, 2, 3, 4, 5, 10, 23, 24, 90, 10, 100, 430, 900, 10];
let key2 = 10;
let positions2 = sequencialSearch(list2, key2);

if (positions2.length > 0) {
    console.log("Chave encontrada nas posições: " + positions2);
} else {
    console.log("Chave não encontrada");
}
