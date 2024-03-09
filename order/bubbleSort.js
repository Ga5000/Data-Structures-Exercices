function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
          // Swap the elements if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
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
  
  const sortedMusicNames = bubbleSort(unsortedMusicNames);
  
  console.log("Unsorted Music Names:", unsortedMusicNames);
  console.log("Sorted Music Names:", sortedMusicNames);
  