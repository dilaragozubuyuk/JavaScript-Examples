function range(from, to, type = 1) {
    array = [];
    typeList = {
        '1': () => ascList(),
        '-1': () => descList()
    }

    function ascList() {
        for (index = 0; index < to; index++) {
            array.push(from);
            from++;
        }

        return array;
    }

    function descList() {
        for (index = from; index >= to; index--) {
            array.push(index);
        }

        return array;
    }

    return typeList[type]();
}

function sum(array) {
    total = 0;
    for (index = 0; index <= array.length; index++) {
        total += Number(index);
    }

    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
  // → 55
