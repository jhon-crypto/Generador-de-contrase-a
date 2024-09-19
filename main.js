let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){
   
   let numeroDigitado = parseInt (cantidad.value);
   
    if(numeroDigitado < 8){
        alert("Para que la contraseña sea segura la cantidad debe ser mayor a 8");
    }

    let password = "";
    for(let i=0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }
    if(numeroDigitado < 8 ){
        alert("Contraseña debil");

    }
    if(numeroDigitado > 8){
        alert("Contraseña segura generada");
    }
    contrasena.value = password;

}

function limpiar(){
    contrasena.value = "";
    cantidad.value = "";
    
}

    


    
