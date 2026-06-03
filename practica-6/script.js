const pantalla = document.getElementById("pantalla");


function agregar(valor) {
    pantalla.value += valor;
}


function borrarTodo() {
    pantalla.value = "";
}


function limpiarTodo() {
    pantalla.value = "";
}


function porcentaje() {
    pantalla.value += "%";
}


function calcular() {
    try {
        let expresion = pantalla.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/(\d+)%/g, "($1/100)");

        pantalla.value = eval(expresion);
    } catch {
        pantalla.value = "Error";
    }
}