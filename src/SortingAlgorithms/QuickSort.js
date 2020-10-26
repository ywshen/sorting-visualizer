function partition(
    arr, 
    low,
    high,
    ) {
      let index = low - 1;
      let pivot = arr[high];
      for (let i=low; i<high; i++) {
          if (arr[i] < pivot) {
              index++;
              let temp = arr[index];
              arr[index] = arr[i];
              arr[i] = temp;
          }
      }
      let temp1 = arr[index+1];
      arr[index+1] = arr[high];
      arr[high] = temp1;
      return index+1;
}

function quickSort(
    arr, 
    low,
    hight,
    ) {
      if (low < high) {
          let pi = partition(arr, low, high);
          quickSort(arr, low, pi-1);
          quicSort(arr, pi-1, high);
      }  
}