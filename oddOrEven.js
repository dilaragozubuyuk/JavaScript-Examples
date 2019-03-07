function isEven(number) {
    if (Math.sign(number) === -1) {
        return false;
    }

    if (number === 0) {
        return true;
    }

    if (number === 1) {
        return false
    }

    return isEven(number % 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
