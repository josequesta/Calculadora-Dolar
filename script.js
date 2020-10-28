function calcularcosto() {
    var dolaroficial = document.getElementById("dolaroficial").value;
    var dolarblue = document.getElementById("dolarblue").value;
    var precioproducto = document.getElementById("precioproducto").value;    
    var precioars = dolaroficial*precioproducto; 
    var arsconDecimal = precioars.toFixed(2); 
    document.getElementById("precioenars").innerHTML = arsconDecimal;
    var precioblue = precioars/dolarblue;
    var blueconDecimal = precioblue.toFixed(2); 
    document.getElementById("precioenblue").innerHTML = blueconDecimal;
}

document.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        calcularcosto();
    }
}, true);
