
function imprimir(frase){
document.getElementById("texto-a-copiar").innerHTML = frase;
return frase;
}
function borrarContenido() {
    let textarea = document.getElementById("mensaje");
    textarea.value = "";
}
function ingresartexto(){

    const textarea = document.getElementById('mensaje');
    const contenido = textarea.value;
    const soloMinusculas = /^[a-z\s]*$/.test(contenido);

    if (!soloMinusculas) {
        alert('El contenido debe ser solo letras minúsculas y no puede estar vacio.');
    }else{

        return contenido;
    }
    textarea.value = "";
    

}
function cambiarVocales(arreglo){
for(var i=0 ; i<=arreglo.length ; i++){
    if(arreglo[i] == "a"){
        arreglo[i]="ai";
    }else if (arreglo[i] == "e" ){
        arreglo[i]="enter";
    }else if(arreglo[i] == "i"){
            arreglo[i]="imes";
    }else if(arreglo[i] == "o"){
            arreglo[i]="ober";
    }else if(arreglo[i] == "u" || arreglo[i] == "U" ){
            arreglo[i]="ufat";
    }
}
return arreglo;
}


function regresar_inicio(arreglo){
    for (var i = 0 ; i<=arreglo.length ; i++){
        if(arreglo[i] == "a" && arreglo[i+1] == "i"){
            arreglo[i] = "a";
            arreglo.splice(i+1,1);
        }else if (arreglo[i] == "e" && 
                arreglo[i+1] == "n" &&
                arreglo[i+2] == "t" &&
                arreglo[i+3] == "e" &&
                arreglo[i+4] == "r"){
            arreglo[i] = "e";
            arreglo.splice(i+1,4);

        }else if (arreglo[i] == "i" && 
                arreglo[i+1] == "m" &&
                arreglo[i+2] == "e" &&
                arreglo[i+3] == "s"){

            arreglo[i] = "i";
            arreglo.splice(i+1,3);

        }else if (arreglo[i] == "o" && 
                arreglo[i+1] == "b" &&
                arreglo[i+2] == "e" &&
                arreglo[i+3] == "r"){
            arreglo[i] = "o";
            arreglo.splice(i+1,3);

        }else if (arreglo[i] == "u" && 
                arreglo[i+1] == "f" &&
                arreglo[i+2] == "a" &&
                arreglo[i+3] == "t"){
            arreglo[i] = "u";
            arreglo.splice(i+1,3);
        }
    }
    return arreglo;
}

function tomarTexto(){
    var texto = ingresartexto();

    return texto;
}
function revision_encriptar(){
    var encriptado = [];
    if( encriptado.length == 0){
        var encriptado = revision_desencriptar();
        resultado = cambiarVocales(encriptado)
        imprimir(resultado.join(''));
    } else {
    var resultado = cambiarVocales(encriptado)
    imprimir(resultado.join(''));
    }
    return resultado;
}

function revision_desencriptar(){
    var desencriptado = tomarTexto().split('');
    if( desencriptado.length == 0){

    } else {
    var resultado = regresar_inicio(desencriptado);
    imprimir(resultado.join(''));
    }
    return resultado;
}

function copiarTexto() {
    var textoACopiar = document.getElementById("texto-a-copiar");
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(textoACopiar);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand("copy");
    alert("Mensaje Copiado")
}
var encriptar = document.getElementById("encriptar");
var desencriptar =document.getElementById("desencriptar");
encriptar.onclick = revision_encriptar;
desencriptar.onclick = revision_desencriptar;
