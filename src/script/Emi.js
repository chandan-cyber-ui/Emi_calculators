const { parseHTML } = require("jquery");

function amountChange()

{

    document.getElementById("txtamount").value=document.getElementById("rangeamount").value;

}
function yearsChange()
{
    document.getElementById("txtyears").value=document.getElementById("rangeyears").value;
}
function rateChange()
{
    document.getElementById("txtrate").value=document.getElementById("rangerate").value;
}
function calculateClick()
{

    var p=parseInt(document.getElementById("txtamount").value)
    var n=parseInt(document.getElementById("txtyears").value)*12;
    var r=parseFloat(document.getElementById("txtrate").value)/12/100

    var Emi= p *  r * Math.pow(1 + r,n) / Math.pow(1 + r,n) - 1;
    var Emi1 = (p+Emi*n)/n;


    document.getElementById("result").innerHTML="Your Monthly  installment amount is :<span style='color:black;font-weight: bold;font-size:30px'> &#8377;"+Math.round(Emi1);+"</span>"

}

function amountTextBoxChange()
{
    document.getElementById("rangeamount").value=document.getElementById("txtamount").value
}
function yeartextBoxChanged()
{
    document.getElementById("rangeyears").value=document.getElementById("txtyears").value
}
function ratetextboxChnge()
{
    document.getElementById("rangerate").value=document.getElementById("txtrate").value
}