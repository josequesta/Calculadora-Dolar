function calcularcosto() {
    var dolaroficial = document.getElementById("dolaroficial").value;
    var dolarblue = document.getElementById("dolarblue").value;
    var precioproducto = document.getElementById("precioproducto").value;    
    var precioars = parseInt(dolaroficial)*parseInt(precioproducto);
    document.getElementById("precioenars").innerHTML = precioars;
    var precioblue = parseInt(precioars)/parseInt(dolarblue);
    document.getElementById("precioenblue").innerHTML = precioblue;
}