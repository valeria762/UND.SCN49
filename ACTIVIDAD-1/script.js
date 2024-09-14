let btn1 = document.getElementById("btnOcultar");
let btn2 = document.getElementById("btnMostrar");

btn1.onclick = ocultarTexto;
btn2.onclick = mostrarTexto;

function ocultarTexto(eveto){
    document.getElementById("parrafo").style.display = "none";
}

function mostrarTexto(eveto){
    document.getElementById("parrafo").style.display = "block";
}

//Mostrar y ocultar botones con jQuery
$(document).ready(function(){
    $("#btnOcultar2").click(function(){
        $("#parrafo").hide("slow");
    });
    $("#btnMostrar2").click(function(){
        $("#parrafo").show("Slow");
    });
})