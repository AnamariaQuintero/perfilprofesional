// alert("FUnCTIONs ACTIVO");
// ############### tipo de variables
// const para variables constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Anamaria Quintero";
// let para variables de bloque o locales 
let count = 1;

// ############### formas de impresión 
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "###Anamaria Quintero");
document.getElementById("box_one").innerHTML = "<h1>Anamaria Quintero</h1>";
document.getElementById("box_two").innerText = "<h1>Anamaria Quintero</h1>";
// librerias
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   ) 
// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer: " + name,
//     background: 'white',
//     position: 'top-start'
// }); 

// ############### tipos de datos 
// numericos
var number_one = 20;
var number_two = 20;
// texto
var class_type = "Eléctiva Técina 1";
// booleanos
var boolean = true; //false
// arrays - vectores
var array_num = [1,2,3,45,3,4,1.2];
var array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ];
var array_mix = [1, "a",2,"c"];
var array_mul = [        
    {name: "Anamaria", last_name: "Quintero", age:"18"},
    {name: "Samuel", last_name: "Quintero", age:"3"},    
    {name: "Matias", last_name: "Gaona", age:"8"},    
    {name: "Fer", last_name: "Gomez", age:"17"}
]

// ############### operadores básicos
// suma
var suma = number_one + number_two;
console.log ("Suma = " + suma);
// resta
var resta = number_one - number_two;
console.log ("Resta = " + resta);
// multiplicacion
var multi = number_one * number_two;
console.log ("Multiplicación = " + multi);
// division
var divi = number_one / number_two;
console.log ("División = " + divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log ("Módulo = " + modulo);