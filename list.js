function arrayToList(array) {
    let object = null;
    for (index = array.length - 1; index >= 0; index--) {
        object = { value: array[index], rest: object };
    }

    return object;
}

function listToArray(object) {
    let array = [];
    convert(object);

    function convert(object) {
        if (!object) {
            return 1;
        } else {
            array.push(object.value);
            convert(object.rest);
        }
    }

    return array;
}

function prepend(value, object) {
    return { value: value, rest: object };
}

function nth(object, index) {
    const array = listToArray(object);
    return array[index];
}

function recursiveNth(object, index) {
    let array = []
    convertToArray(object);
    function convertToArray(object) {
        if (!object) {
            return 1
        }
        array.push(object.value);
        return convertToArray(object.rest);
    }

    return array[index];
}

console.log(arrayToList([10, 20, 50]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(30, prepend(10, prepend(20, null))));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
 // → 20
