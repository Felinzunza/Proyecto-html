// Función que activa la validación de Bootstrap
function activarValidacionBootstrap() {
  'use strict';

const form = document.querySelector('.needs-validation'); // busca el formulario

form.addEventListener('submit', event => {
  if (!form.checkValidity() || !validarCodigo() || !validarNombreProducto() ||!validarDescripcion()||!validarPrecio()
       ||!validarStockActual()
       ||!validarStockCritico()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

}

// Cuando la página cargue, activamos la validación
document.addEventListener("DOMContentLoaded", activarValidacionBootstrap);




function validarCodigo(){
  let codigo = document.getElementById("codigo").value.trim();

  if (codigo.length >= 3) {
    document.getElementById("checkcodigo").innerHTML = "✅";
    return true;
  } else {
    document.getElementById("checkcodigo").innerHTML = "Codigo incorrecto ⛔";
    return false;
  }
}




function validarNombreProducto(){
    let nombrep = document.getElementById("nombrep");

    if(nombrep.length > 100) {
    document.getElementById("checknombrep").innerHTML =  "nombre incorrecto ⛔";
    return false;
    }
    else
    {
        document.getElementById("checknombrep").innerHTML = "✅";
        return false;
    }
}



function validarDescripcion(){
    let descripcion = document.getElementById("descripcion");

    if(descripcion.length >= 500) {
    document.getElementById("checkdescripcion").innerHTML = "descripcion incorrecta ⛔";
    
    return false;
    }
    else
    {
        document.getElementById("checkdescripcion").innerHTML = "✅";
        return true;
    }
}

function validarPrecio(){
  let precio = document.getElementById("precio").value;


  precio = parseFloat(precio);
  if (isNaN(precio) || precio < 0) {
    document.getElementById("checkprecio").innerHTML = "El valor del precio es incorrecto ⛔";
    return false;
  } else {
    document.getElementById("checkprecio").innerHTML = "✅";
    return true;
  }
}

function validarStockActual(){
    let stockactual = document.getElementById("stockactual").value;
    stockactual =parseInt(stockactual);

    if(isNaN(stockactual) || stockactual < 0) {
        document.getElementById("checkstockactual").innerHTML = "el valor de stock es incorrecto ⛔";
   
    return false;
    }
    else
    {
         document.getElementById("checkstockactual").innerHTML = "✅";
        return true;
    }
}




function validarStockCritico(){
    let stockcritico = document.getElementById("stockcritico").value;
        stockcritico =parseInt(stockcritico);


    if(stockcritico >= 0) {
    document.getElementById("stockcritico").innerHTML = "✅";
    return true;
    }
    else
    {
        document.getElementById("stockcritico").innerHTML = "stock incorrecto ⛔";
        return false;
    }
}

