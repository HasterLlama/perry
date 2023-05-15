function uwu() {
     
    var losoweCzesciCialaa = ["twarz", "noga", "ręka","parówka","wątroba","mama","babcia","ciocia"];
    var losowePrzymiotniki = ["cuchnąca", "brudna", "głupia", "brzydka","obślizgła","idiotyczna","upośledzona"];
    var losoweSlowa = ["mucha", "kuna", "małpa", "jaszczurka", "szynszyla","papuga","mrówka","parówka"];
    var losoweCzesciCiala = losoweCzesciCialaa[Math.floor(Math.random() * losoweCzesciCialaa.length)];
    var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * losowePrzymiotniki.length)];
    var losoweSlowo = losoweSlowa[Math.floor(Math.random() * losoweSlowa.length)];
    var losowaZniewaga = "Twoja " + losoweCzesciCiala + " jest jak " + losowyPrzymiotnik + " " +losoweSlowo;
    
    document.getElementById("iwi").innerHTML = losowaZniewaga
}