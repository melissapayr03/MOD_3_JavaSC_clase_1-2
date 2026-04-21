
/* CLASE 1 */
/* Tipos de datos */

// texto/string
let nombre = "Melissa"
console.log("Hola, mi nombre es" + nombre + "!")

// número
let numero = 22
if (numero > 18) {                         // con IF
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}  

// boolean (usado para evaluar condiciones o tomar decisiones en el código)
let esuniversitaria = true
if (esuniversitaria) {                     // con IF
    console.log("Sí es universitaria");
} else {
    console.log("No es universitaria")
}
   

// Ejemplo de operaciones matemáticas
let a = 20;
let b = 10;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

// Operadores de comparación
console.log("¿a es igual a b? " + (a === b));
console.log("¿a es mayor que b? " + (a > b));
console.log("¿a es menor que b? " + (a < b));
        
if (null) {
    console.log("Esto no se ejecuta porque null es falsy.")
} else {
    console.log("null es falsy.")
}


console.log(typeof null);         // object 
console.log(typeof undefined);    // indefinido