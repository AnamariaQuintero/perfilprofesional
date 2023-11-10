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
];

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

// operadores logicos y estructuiras condicionales (inverse, incremento y decremento)
// and && con if - Ampersand
var bool = true;
var numeric = 10;
if(!bool && numeric == 10){ //tres iguales compara el dato y el valor 
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}
// ORR || con if 
if(!bool || numeric ==7){
    console.log("ENTRA IF");
    numeric+=3;
}
else{
    console.log("ENTRA ELSE");
    numeric--;
}
console.log(numeric);

// FOR
for(let j = 0; j<array_text.length; j++){
    console.log(array_text[j] + (j+1));
}

// WHILE
let a=0;
while(a<array_text.length){
    console.log(array_text[a] + (a+1));
    a++;
}

//DO WHILE
let m = 0;
do{
    console.log(array_text[m] + (m+1));
    m++;
}while(m<array_text.length);

// FUNCIONES Y EVENTOS 
function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMinutes());
    for (let j=0; j<array_mul.length; j++)
    console.log(array_mul[j].last_name);
}

function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style = document.getElementById("nombres");
    // console.log(nombres);
    if (nombres.length > 2){
        nombres_style.style.border = "2px solid green";
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        alert (nombres.split(" "));

    }
}

function change_Color(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = "#fff"
}



const clear_color = document.querySelector("#clear_color");

clear_color.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
});

// REGISTRO FORMULARIO 
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info ="";
    // console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <=2 ){ //value almacena el dato
        info += "NOMBRES Y/O APELLIDOS INVALIDOS";
        information.style.color = "red";
    }
    else{
        alert(nombres.value + "" + apellidos.value);
    }
    information.innerText = info;
});

