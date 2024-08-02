console.log('Hello world');

// key: value
let obj = {
    name: 'Eric',
    address: 'LA',
    age: 30,
    email: '',
    a: function(){
        console.log('Hello');
        return '';
    }
}; 

JSON
"{name: 'Eric', address: 'Ha Noi'}"

let b = 'name';
obj[b] = 'Hary';
// obj.b = 'Ali'; thêm 1 thuộc tính b
obj.name = 'Ali'; // sửa giá trị của thuộc tính name
let c = ''; 


console.log(`type of a:`, typeof obj);
console.log(`type of b:`, typeof b);

console.log(`Name:`, obj.name);
console.log(`Address:`, obj['address']);
console.log('Call function:', obj.a());