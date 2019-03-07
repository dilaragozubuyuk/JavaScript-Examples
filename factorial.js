function factor(number) {
    if (number == 0) {
        return 1;
    } else {
        return number * factor(number - 1);
    }
}

console.log(factor(4));
  // → 8
