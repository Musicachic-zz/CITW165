var $ = function (id) {
    return document.getElementById(id);
}
var calculate_click = function ()
{
    var subtotal = parseFloat( $("subtotal").value );
    var taxRate  = parseFloat( $("tax_rate").value );

    if (isNaN(subtotal))
    {
        alert("Subtotal must be numeric.");
    }
    else if (subtotal <=0 || subtotal > 10000)
    {
        alert("Subtotal must be a positive number less than $10,000.")
    }
    else if (isNaN(taxRate))
    {
        alert("Tax rate must be numeric.");
    }
    else if (taxRate <= 0 || taxRate > 12)
    {
        alert("Tax rate must be a positive number less than 12.")
    }
    else
    {
        var salesTax = subtotal * (taxRate/100);
        $("sales_tax").value = parseFloat(salesTax.toFixed(2));
        var total = subtotal + salesTax;
        $("total").value = parseFloat(total.toFixed(2));
    }
}
var clear_button = function ()
{
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
}

var clear_subtotal = function ()
{
    $("subtotal").value = "";
}

var clear_tax_rate = function()
{
    $("tax_rate").value = "";
}
window.onload = function ()
{
    $("calculate").onclick = calculate_click;
    $("clear").onclick = clear_button;
    $("subtotal").ondblclick = clear_subtotal;
    $("tax_rate").ondblclick = clear_tax_rate;
    $("subtotal").focus();
}



