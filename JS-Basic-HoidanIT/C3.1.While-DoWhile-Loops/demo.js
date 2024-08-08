console.log('Hello World!');

let arr = ['Bayern', 'Dortmund', 'Bayern04', 'RB Leipzig'];


for(let i = 0; i < arr.length; i++){
    console.log('Top: ', i + 1, arr[i]);
}


let i = 0;
while(i < arr.length){
    console.log('Top: ', i + 1, arr[i]);
    i++;
}
console.log(i);

i = 0;
do{
    console.log('Top: ', i + 1, arr[i]);
}while(1>2);