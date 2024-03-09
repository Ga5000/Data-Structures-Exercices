function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j].toLowerCase() < arr[minIndex].toLowerCase()) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }

  const unsortedMusicNames = [
    "Watermelon Sugar",
    "Blinding Lights",
    "Astronaut in the Ocean",
    "Kiss Me More",
    "Save Your Tears",
    "Mood",
    "Deja Vu",
    "Good 4 U",
    "Levitating",
    "Driver's License"
  ];
  
  const sortedMusicNames = selectionSort(unsortedMusicNames);
  
  console.log("Lista de Músicas Não Ordenada:", unsortedMusicNames);
  console.log("Lista de Músicas Ordenada:", sortedMusicNames);
  