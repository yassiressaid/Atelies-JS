/*global console, alert*/

/*
    start whit letters, underscore, $
    
    var = JvaScript Variable Keyword
    
    myprice = Variable Name
    
    ( = ) = Assignment Operator
    
    100 = Variable Value 
*/

var myOldPrice = 2000,

    myNewPrivce = 900,

    myDiscount = myOldPrice - myNewPrivce + 500;

document.getElementById("price").innerHTML = myDiscount;