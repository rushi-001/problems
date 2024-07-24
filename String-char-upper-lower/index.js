/*

~> Check if a string is formatted as a title. A title string is when every word of the string start with a upper case letter.

~> Examples:
    checkTitle("A Mind Boggling Achievement") ➞ true

    checkTitle("A Simple C++ Program!") ➞ true

    checkTitle("Water is transparent") ➞ false

*/
checkTitle = (title) => {
    words = title.split(" ");

    const checkTheFirstChar = words.every(word => {
        const firstChar = word[0];
        return firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase();
    });

    return checkTheFirstChar;
}

console.log(checkTitle("A Mind Boggling Achievement"));

console.log(checkTitle("A Simple C++ Program!"));

console.log(checkTitle("Water is transparent"));