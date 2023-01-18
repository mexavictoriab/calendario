console.log("Probando");
function isItHoliday(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    let getDate = new Date(dia, mes, anio).getDay(); 
    console.log(getDate);
    switch(getDate){
    case 0:
        return document.getElementById("resultado").innerHTML = "hoy se duerme todo el día";
    case 6:
        return document.getElementById("resultado").innerHTML = "Hoy se limpia la casa";
        default:
        return document.getElementById("resultado").innerHTML = "Hoy se trabaja todo el día";
    }

}