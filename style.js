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
/*----------LOGGIN------ */

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Obtén el valor ingresado por el usuario
    var username = document.getElementById("username").value;
    
    // Modifica el párrafo con el nombre ingresado
    document.getElementById("welcomeMessage").textContent = "Bienvenido, " + username;
  });