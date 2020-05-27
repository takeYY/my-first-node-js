'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1,1);

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 2) + fib(n - 1);
    memo.set(n, value);
    return value;
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