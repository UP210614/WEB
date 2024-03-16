
const texto = document.querySelector('#texto');
const botonSumar = document.querySelector('#sumar');
const botonRestar = document.querySelector('#restar');
const botonReiniciar = document.querySelector('#reiniciar');
let contador = 0;

botonSumar.addEventListener('click', operacion);
botonReiniciar.addEventListener('click', operacion);
botonRestar.addEventListener('click', operacion);

function operacion(e){
    const id = e.target.id;
    switch(id){
        case 'restar': contador -= 1
        break;
        case 'reiniciar': contador = 0
        break;
        case 'sumar': contador += 1;
        break;
    }   

    texto.textContent = contador;
}


function esPrimo(n){
    if(n<=1){
        return false;
    }

    for(let i = 2; i<n;i++){
        if(n%i == 0){
            return false
        }
    }

    return true

}


for (let i = 0; i<101; i++){
    if(esPrimo(i))
        console.log(i); 
}

console.log(" ");

let cont = 0;
for (let i = 0; cont<=100; i++){
    if(esPrimo(i)){
        console.log(i); 
        cont++;
    }
}