// Your code here.
function reverseArray(array) {
    list = [];
    for (index = array.length - 1; index >= 0; index--) list.push(array[index]);
    return list;
}

function reverseArrayInPlace(array) {
    let halfLength = Math.floor(array.length / 2);
    let wholeLength = array.length - 1;

    for (index = 0; index < halfLength; index++ , wholeLength--) {
        let temp = array[index];
        array[index] = array[wholeLength];
        array[wholeLength] = temp;
    }

    return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
