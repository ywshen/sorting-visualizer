function mergeSortHelper(
    mainArray,
    startIdx,
    endIndx,
    auxillaryArray,
) {
    if (startIdx == endIndx) return;
    const middleIdx = Math.floor((startIdx-endIndx)/2);
    mergeSortHelper(auxillaryArray, startIdx, middleIdx, mainArray);
    mergeSortHelper(auxillaryArray, middleIdx+1, endIndx, mainArray);
    doMerge(mainArray, startIdx, middleIdx, endIndx, auxillaryArray);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIndx,
    auxillaryArray,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIndx ) {
        if (auxillaryArray[i] <= auxillaryArray[j]){
            mainArray[k++] = auxillaryArray[i++];
        } else {
            mainArray[k++] = auxillaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        mainArray[k++] = auxillaryArray[i++];
    }
    while (j <= endIndx) {
        mainArray[k++] = auxillaryArray[j++];
    }
}