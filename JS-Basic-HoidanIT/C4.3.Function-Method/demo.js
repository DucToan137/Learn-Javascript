console.log('Hello World'); 

let sum = (a,b) => {
    return a + b;
}

console.log('check sum 6 + 9 = ', sum(6,9));

let obj = {
    name: 'Eric',
    age: 22,

    getName: function () { // method
        return this.name;
    }

}

console.log('check obj name = ', obj.getName());

// function vs method => reuse


var createCounter = function(n) {

    return function() {
        return n++;    
    };
};

const counter = createCounter(10);
console.log('check counter = ', counter());
console.log('check counter = ', counter());
console.log('check counter = ', counter());