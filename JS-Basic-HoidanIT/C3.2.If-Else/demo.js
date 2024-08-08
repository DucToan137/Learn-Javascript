console.log('Hello World');

let arr = ['Bayern', 'Dortmund', 'Mu', 'Mc'];

let i = 0;

while(i < arr.length){

    if(arr[i].length===2){
        console.log('Top :', i + 1, arr[i]);
    } else if(arr[i].length===4){
        console.log('Top :', i + 1, arr[i]);
    }else{
        console.log('Top :', i + 1, arr[i]);
    }
    i++;
}