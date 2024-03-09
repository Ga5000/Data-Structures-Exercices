function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j].toLowerCase() > currentElement.toLowerCase()) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
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
  
  const sortedMusicNames = insertionSort(unsortedMusicNames);
  
  console.log("Unsorted Music Names:", unsortedMusicNames);
  console.log("Sorted Music Names:", sortedMusicNames);
  