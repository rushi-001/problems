// Examples
// count_vowels("Celebration") ➞ 5 # 5 vowls

// count_vowels("Palm") ➞ 1 # 1 vowl

// count_vowels("Prediction") ➞ 4 # 4 vowls

// a, e, i, o, u are considered vowels (not y).

// All test cases are one word and only contain letters.
const readline = require('readline');

function countVowels(str) {
    let hasSpace = str.includes(' ');
    let strLength = str.length;
    let counter = 0;
    for (let i = 0; i < strLength; i++) {
        let char = str[i];
        if (!hasSpace) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                counter++;
            }
        } else {
            console.log(">> Enter an word with letters and no spaces.");
            break;
        }
    }
    return counter;
}


const read = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

read.question(">> Enter word: ", (word) => {
    const vowels = countVowels(word);
    console.log(`${vowels} Vowels \n`);
    read.close()
});