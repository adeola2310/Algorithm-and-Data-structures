// how to log all pairs of an array ie [1,2][1,3][1,4][1,5] [2,1][2,2] and so on
const boxes = [1, 2, 3, 4, 5, 6];

function logAllPairsOfArray (array){
    for (let i = 0; i < array.length; i++){
     for (let j = 0; j <array.length ; j++){
         console.log(array[i]);
         console.log(array[j]);
     }
    }
}

console.log(logAllPairsOfArray(boxes))

// the big O for this function is O(N^2)
