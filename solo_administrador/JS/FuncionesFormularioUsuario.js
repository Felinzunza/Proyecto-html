
function validarPass(){
    let pass=document.getElementById("pass").value;
    let repass=document.getElementById("repass").value;
    if(pass==repass){
        document.getElementById("checkpass").innerHTML="✅"
    }else{
        document.getElementById("checkpass").innerHTML="Los password no coinciden ⛔"
    }
}


function validarRut(){
    let rut=document.getElementById("rut").value;


    if(rut.charAt(rut.length - 2) == '-' && !rut.includes(".")  && rut.length >= 9 && rut.length <= 11 && rut){
   
        document.getElementById("checkrut").innerHTML="✅"
       
    }
    else{
        document.getElementById("checkrut").innerHTML="rut incorrecto ⛔"
       
    }
}



