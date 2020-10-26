export function getBubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(
    array,
    animations,) {
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length-i; j++){
            if (array[j] > array[j+1]) {
                let temp = array[j];
                animations.push([j, array[j+1]]);
                animations.push([j+1, temp]);
                array[j] = array[j+1];
                array[j+1] = temp; 
            }
        }
    }
}