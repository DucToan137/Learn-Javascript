console.log('Hello World!');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter, find
// mutate

let filter = arr.filter((item, index)=>{
    // console.log('>>> check filter: item: ', item, 'index: ', index);
    return item && item > 5;
});

let arr1 = [
    {name: 'Eric', age: 25},
    {name: 'Alice', age: 22},
    {name: 'Bob', age: 25},
    {name: 'John', age: 30},
    {name: 'Marry', age: 18}
];


let filter1 = arr1.filter((item, index) => {
    // console.log('>>> check filter: item: ', item, 'index: ', index);
    return item && item.age === 25;
})

console.log('>>> filter: ', filter1);


let find = arr1.find((item, index)=>{
    // console.log('>>> check find: item: ', item, 'index: ', index);
    return item && item.age === 25;
})
console.log('>>> find: ', find);
