
// function add(a,b, fun){
//     let sum = a + b;
//     fun(sum); 
// }

// add(2,10, function(x){
//     alert(x);
// });

function hola(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello world');
        },2000);
    });
};

// setTimeout(function (){
//     console.log("Hola");
// },1000);


async function asyncCall(){
    console.log("Hola");
    const result = await hola();
    console.log(result);
}

asyncCall();
