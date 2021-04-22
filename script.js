let numberArray = [1,2,4,5,6]
console.log(`Before deletion: ${numberArray}`)
let element = 2; // you can also take element as input from user
let index = numberArray.indexOf(element); //If the element is not in the array, indexOf() returns -1.
if (index!=-1) {
    
    numberArray.splice(index,1); //splice remove 1 element at which index element found.
}
console.log(`After insertion: ${numberArray}`);