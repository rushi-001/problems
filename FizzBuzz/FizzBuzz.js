// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true

const n = 15;
const div3 = "Fizz";
const div5 = "Buzz";
const div3_5 = "Fizz Buzz";
const arr = [];

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        arr.push(div3_5);
    else if (i % 5 === 0)
        arr.push(div5);
    else if (i % 3 === 0)
        arr.push(div3);
    else
        arr.push(i);
}
console.log(arr);