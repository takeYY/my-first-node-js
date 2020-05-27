'use strict';

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
/*
let sum = 0;
const number = process.argv[2] || 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
*/