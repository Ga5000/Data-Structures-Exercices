function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].toLowerCase() < pivot.toLowerCase()) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
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
  
  const sortedMusicNames = quickSort(unsortedMusicNames);
  
  console.log("Unsorted Music Names:", unsortedMusicNames);
  console.log("Sorted Music Names:", sortedMusicNames);
  