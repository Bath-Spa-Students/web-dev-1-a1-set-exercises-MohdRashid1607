function calculate() {
    var price_per_litre = document.getElementById('Petrol_Price').value;
    var litres = document.getElementById('liters').value;
    var total_price = price_per_litre * litres
    document.getElementById('total_Amount').innerHTML = "AED " + total_price;

}