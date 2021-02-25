'use strict'

window.addEventListener('load', function(){
    console.log("EL COSO ESE");
    var formulario = document.querySelector("#autonomo");
    var box_dashed = document.querySelector(".dashed");
    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var usuario = document.querySelector("#usuario").value;
        var nombre = document.querySelector("#nombre").value;
        var telefono = document.querySelector("#telefono").value;
        var cedula = document.querySelector("#cedula").value;

        if(usuario.trim() == null || usuario.trim().length == 0){
            alert("El usuario no es valido");
            return false;
        }
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre y apellido no son validos");
            return false;
        }
        if(telefono.trim() == null || telefono.trim().length == 0){
            alert("El telefono no es valido");
            return false;
        }
        if(cedula.trim() == null || cedula.trim().length == 0){
            alert("La cedula no es valida");
            return false;
        }
        
        var p_usuario = document.querySelector("#p_usuario span");
        var p_nombre = document.querySelector("#p_nombre span");
        var p_telefono = document.querySelector("#p_telefono span");
        var p_cedula = document.querySelector("#p_cedula span");
        console.log(usuario, nombre, telefono, cedula);
        
        p_usuario.innerHTML = usuario;
        p_nombre.innerHTML = nombre;
        p_telefono.innerHTML = telefono;
        p_cedula.innerHTML = cedula;
    });

});