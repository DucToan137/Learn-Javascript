console.log(`hello world from html`.toUpperCase());

let a = 5; // int, float, double, long
let b = 6;
let c = 6.9;
let d = `5`;
let e = `2`;

let f = Number(d);
let g = +e; // convert string to number

console.log(a + b);
console.log(a + c);
console.log(a + d);
console.log(a * d);
console.log(d / e);
console.log(a === d, `a:`, typeof a, `d: `, typeof d);
console.log('f:',typeof f);
console.log('g:',typeof g);