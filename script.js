function calcularcosto() {
    var dolaroficial = document.getElementById("dolaroficial").value;
    var dolarblue = document.getElementById("dolarblue").value;
    var precioproducto = document.getElementById("precioproducto").value;    
    var precioars = parseInt(dolaroficial)*parseInt(precioproducto); 
    var arsconDecimal = precioars.toFixed(2); 
    document.getElementById("precioenars").innerHTML = arsconDecimal;
    var precioblue = parseInt(precioars)/parseInt(dolarblue);
    var blueconDecimal = precioblue.toFixed(2); 
    document.getElementById("precioenblue").innerHTML = blueconDecimal;
}