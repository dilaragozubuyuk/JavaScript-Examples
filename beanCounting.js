function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length + 1; i++) {
        if (string[i] === 'B') {
            count++;
        }
    }

    return count;
}

function countChar(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length + 1; i++) {
        if (string[i] === letter) {
            count++;
        }
    }

    return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
  // → 4
