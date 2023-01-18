var a = document.getElementById("campo-a");
var b = document.getElementById("campo-b");

function validar() {
    if(a.value < b.value) {
        alert("deu bom");
    } else if (a.value == b.value) {
        alert("empate")
    } else {
        alert("deu ruim");
    }
}