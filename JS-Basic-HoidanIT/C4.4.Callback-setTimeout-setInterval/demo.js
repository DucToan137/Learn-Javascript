console.log('Hello World');

let sum = (a, b, callback) =>{

    let tong = a + b;

    // setTimeout(() => { // delay 5s
    //     callback(tong);
    // }, 5000) // 5s


    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if(i === 5){
            clearInterval(timer);
        }
    }, 1000); // 1s

    

}

let printSum = (message) => {
    console.log('check sum 6 + 9 = ', message);
}

sum(6, 9, printSum);