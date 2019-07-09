let data = [1, 2, 3, 4, 5, 6];
let sum = data.reduce((acc, val) => acc + val);

console.log(sum) // 21

let arrays = [[1, 2, 3], [4, 5], [6]];
let flatted = arrays.reduce((acc, val) => {
    return acc.concat(val);
}, [])

console.log(flatted); // 1, 2, 3, 4, 5, 6];
