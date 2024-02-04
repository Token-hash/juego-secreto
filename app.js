let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


// DESAFIOS: FUNCIONES

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// function imc(altura, peso) {
//     altura = parseFloat(prompt("ingrese la altura de la persona en metros: "));
//     peso = parseFloat(prompt("ingrese el peso de la persona en kilogramos :"));

//     let imc = (peso / Math.pow(altura, 2));
//     let resultado = alert(`el imc de una persona con ${peso} kilos de peso y una altura de ${altura.toFixed(2)} metros es de ${imc.toFixed(2)}.`);
//     console.log(resultado);
//     return;
// }

// imc();


// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function factorial(numero) {
//     numero = prompt("ingrese el número a calcular el factorial");
//     let inicio = 1;
//     let factorial = 1;

//     while(inicio <= numero) {
//         factorial = factorial * inicio;
//         inicio++;
//     }

//     alert(`El factorial de ${numero} es ${factorial}`);
// }

// factorial();


// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// function converDollar(dollar) {
//     dollar = prompt("ingrese la cantidad de dolares a convertir");
//     let valorDolarPeso = 3893;

//     let conversion = dollar * valorDolarPeso;
//     alert(`El valor de ${dollar} dolares en pesos colombianos es de ${conversion} pesos colombianos teniendo en cuenta que, a la fecha de hoy, 31/01/2024 el dolar esta a ${valorDolarPeso}`);

// }

// converDollar();


// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// function areaPerimetro(alto, ancho) {
//     let perimetro = 0;
//     let area = 0;

//     ancho = prompt("¿Cuál es el ancho de la sala en metros?");
//     alto = prompt("¿Cuál es el alto de la sala en metros?");

//     perimetro = 2 * (ancho + alto);
//     area = ancho * alto;

//     alert(`el perimetro de la sala es de ${perimetro} metros con un areá de ${area} metros teniendo de base que la sala tiene un ancho de ${ancho} y un alto de ${alto}`);
// }

// areaPerimetro();


// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// function areaPerimetro(radio) {
//     const pi = 3.14;
//     let area = 0;
//     let perimetro = 0;
//     radio = prompt("¿Cuál es el radio del circulo en centimetros?");

//     area = pi * (Math.pow(radio, 2));
//     perimetro = 2 * (pi * radio);
//     console.log(`El circulo con un radio de ${radio} cm tienen un perimetro de ${perimetro} cm y un area de ${area} cm².`);
//     
// }

// areaPerimetro();


// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
// function tablaMulti(numeroTabla) {
//     numeroTabla = parseInt(prompt("ingrese el número del que quiere que se haga la tabla."));
//     let topeTabla = parseInt(prompt("¿Hasta donde quiere que vaya la tabla?"));
    
//     for(let i = 1; i <= topeTabla; i++) {

//         let multiplicar = i * numeroTabla;
//         console.log(`${numeroTabla} x ${i} = ${multiplicar}`);
//     }
// }

// tablaMulti();



// DESAFIOS: ARRAYS
// 1. Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];


// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];


// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
// console.log(lenguagesDeProgramacion);


// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// function mostrar() {
//     console.log(lenguagesDeProgramacion);
// }
// mostrar();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// function mostrar() {
//     let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
//     let tope = lenguagesDeProgramacion.length;
    
//     for (let inicio =  0; inicio <= tope; tope--) {
//         console.log(lenguagesDeProgramacion[tope]);
//     }

// }

// mostrar();


// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
// function promedios() {
//     let listaNumeros = [5.0, 3.5, 2.5, 5.0];
//     let sumatoria = 0;
//     let promedio = 0;
    
//     for(let i = 0; i < listaNumeros.length; i++) {
//         sumatoria = sumatoria + listaNumeros[i];
//     }

//     promedio = sumatoria / listaNumeros.length;
//     console.log(promedio);    
// }

// promedios();


// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// function mayorMenor() {
//     let listaNumeros = [5, 23, 56, 2, 23, 5, 68];
//     let numeroMayor = 0;
//     let numeroMenor = 0;
//     let j = 1;
    
//     for(let i = 0; i < listaNumeros.length; i++) {
//         if (listaNumeros[i] > listaNumeros[i - 1]) {
//             numeroMayor = listaNumeros[i];
//         } else if (listaNumeros[i] < listaNumeros) {
//             numeroMenor = listaNumeros[i];
//         }
//     }
// }


// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
// function suma() {
//     let listaNumeros = [5, 23, 56, 2, 23, 5, 68];
//     let sumatoria = 0;

//     for(let i = 0; i < listaNumeros.length; i++) {
//         sumatoria += listaNumeros[i];
//     }

//     console.log(sumatoria);
// }

// suma();


// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// Sacado de chat GPT pq no pude hacerlo, lo copie para tenerlo de referencia y creo que no es mala estructura.
// function encontrarPosicion(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === elemento) {
//             return i; // Devuelve la posición si se encuentra el elemento
//         }
//     }
//     return -1; // Devuelve -1 si el elemento no está en la lista
// }

// // Ejemplo de uso
// let miLista = [2, 4, 6, 8, 10];
// let elementoBuscado = 6;

// let posicion = encontrarPosicion(miLista, elementoBuscado);

// if (posicion !== -1) {
//     console.log(`El elemento ${elementoBuscado} se encuentra en la posición ${posicion}.`);
// } else {
//     console.log(`El elemento ${elementoBuscado} no se encuentra en la lista.`);
// }


// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function listasSumas() {
//     let lista1 = [5, 23, 56, 2, 23, 5, 68];
//     let lista2 = [5, 3, 2, 5, 25, 6, 98];
//     let lista3 = [];

//     for(let i = 0; i < lista1.length; i++) {
//         lista3.push(lista1[i] + lista2[i]);
//     }

//     console.log(lista3);
// }

// listasSumas();

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function ListaCuadrados() {
//     let listaNumeros = [5, 23, 56, 2, 23, 5, 68];
//     let listaCuadrado = [];

//     for (let i = 0; i < listaNumeros.length; i++) {
//         listaCuadrado.push(Math.pow(listaNumeros[i], 2));
//     }
//     console.log(listaCuadrado);
// }

// ListaCuadrados();