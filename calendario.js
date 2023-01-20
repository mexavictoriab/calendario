console.log("Probando");
function isItHoliday(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    let getDate = new Date(anio, mes, dia).getDay(); 
    console.log(getDate);
    switch(getDate){
    case 0:
        return document.getElementById("resultado").innerHTML = "Domingo, Hoy se limpia la casa";
    case 1:
        return document.getElementById("resultado").innerHTML = "El lunes arranca la semana";
    case 2:
        return document.getElementById("resultado").innerHTML = "Garfield odia los martes y hoy es martes";
    case 3:
        return document.getElementById("resultado").innerHTML = "Miércoles, mitad de semana";
    case 4:
        return document.getElementById("resultado").innerHTML = "Jueves casi fin de semana";
    case 5:
        return document.getElementById("resultado").innerHTML = "Viernes a dormir por la tarde";
    case 6:
        return document.getElementById("resultado").innerHTML = "Sabado de compras";
    
    }

}