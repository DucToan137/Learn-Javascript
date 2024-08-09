var createCounter = function(init) {

    let temp = init;

    function increment() {
        return ++temp;
    }

    function decrement() {
        return --temp;
    }

    function reset() {
        return temp = init;
    }

    return { increment, decrement, reset };
    
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
