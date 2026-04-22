
/* CLASE 2 */
/* Comparaciones y decisiones en JavaScript */


// Nota >= 90 ---> el estudiante aprueba con "Excelente"

// Nota 75-89 ---> el estudiante aprueba con "bien"

// Nota 60-74 ---> el estudiante aprueba con "Suficiente"

// Nota < 60 ---> el estudiante no aprueba


// EJEMPLO de Validación de notas de los estudiantes

let notacalificacion = 64;

if (notacalificacion >= 0 && notacalificacion <= 100) {
    console.log("El estudiante tiene una calificación:" + notacalificacion);
    if (notacalificacion >= 90) {
        console.log("EXCELENTE");
    } 
    else if (notacalificacion >= 75) {
        console.log("BIEN");
    }
    else if (notacalificacion >= 60) {
        console.log("SUFICIENTE");
    } 
    else {
        console.log("REPROBATORIA");
    }
}
