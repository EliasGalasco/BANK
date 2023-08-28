function btnMostrar1(){
    document.getElementById("bntPagos").style.display = "block";
    document.getElementById("bntTransferencia").style.display = "none";
    document.getElementById("bntPrestamos").style.display = "none";
}
function btnMostrar2(){
    document.getElementById("bntTransferencia").style.display = "block";
    document.getElementById("bntPagos").style.display = "none";
    document.getElementById("bntPrestamos").style.display = "none";
}
function btnMostrar3(){
    document.getElementById("bntPrestamos").style.display = "block";
    document.getElementById("bntTransferencia").style.display = "none";
    document.getElementById("bntPagos").style.display = "none";
}

let btnEnviar = document.getElementById("btnEnviarForm")
function enviar (btnEnviar){
    alert("Se ha enviado con Exito!")
}