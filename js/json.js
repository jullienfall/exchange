$(document).ready(function () {
    getExchangeRate();
});


function getExchangeRate() {
    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/A/EUR/?format=json', function (price) {
        $('.rate').html(price.rates[0].mid);
    });

};



