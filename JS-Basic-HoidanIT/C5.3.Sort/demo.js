console.log('Hello world!');


const array1 = [1, 30, 4, 21, 100000];
let arr = [];

array1.sort((item1, item2)=> {
    if(item1 > item2) {
        arr.push(item1);
    }
    console.log(arr);
    return item1 - item2});
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
