//substitua o for por while na busca sequencial
function sequencialSearch(list,key){
    let i = 0;
    while(i < list.length){
        if(list[i] == key){
            return i;
        }
        i+=1;
    }
    return -1;
}

let list = [1,2,3,6,12,20,30,40,55,69,78], key = 55, position = sequencialSearch(list,key);
    position != -1 ? console.log(`A chave ${key} foi encontrada na posição ${position}`) : console.log("Chave não encontrada");