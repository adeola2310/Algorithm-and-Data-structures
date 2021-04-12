// given two arrays; let them return true or false if an ekement in an element is equal to one in the other array


// x = ['a', 'b,' , 'c', 'd'];
// y = ['z', 'x', 'w']
// using the brute force approach


const array1 = ['a', 'b,' , 'c', 'd'];
const array2 = ['z', 'a', 'w'];

function containsOneElement (arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
     for (let j = 0; j < arr2.length; j++){
         // lets compare each elements in the two array
  if(arr1[i] === arr2[j]){
      return true
  }
     }
    }
    return false
}

console.log(containsOneElement(array1, array2));

