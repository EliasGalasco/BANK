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
let userData = {}; // Objeto para almacenar los datos del usuario

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtén los valores ingresados por el usuario
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;

  // Guarda los datos en el objeto userData
userData.name = name;
userData.password = password;

  // Reiniciar el formulario
this.reset();
});

document.getElementById("loginButton").addEventListener("click", function() {
  // Obtén los valores ingresados por el usuario en el formulario de inicio de sesión
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;

  // Verifica si los datos ingresados coinciden con los almacenados en el objeto userData
if (userData.name === name && userData.password === password) {
    // Modifica el párrafo con el nombre ingresado
    document.getElementById("welcomeMessage").textContent = "Bienvenido, " + name;
    alert('Has iniciado con Exito!');
} else {
    // Muestra un alerta de nombre de usuario o contraseña incorrectos
    alert("Nombre de usuario o contraseña incorrectos");
}
});
