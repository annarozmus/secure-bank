$( function() {

    var amount = 10000;
    var time = 21;



    $( "#slider-amount" ).slider({
        range: "max",
        value: 10000,
        step: 1000,
        min: 10000,
        max: 100000,
        slide: function( event, ui ) {
            amount = ui.value;
            repayment()
        }
    });

    $( "#slider-time" ).slider({
        range: "max",
        value:time,
        min: 1,
        step: 1,
        max: 24,
        slide: function( event, ui ) {
            time = ui.value;
            repayment()
        }
    });

    function repayment() {
        var instalment = (amount * 1.5)/time;
        var instalmentNumber = Math.round(instalment);
        $( "#amount" ).text(amount + "zł");
        $( "#time" ).text(time);
        $(".repayment-blue").text(instalmentNumber + "zł");

    }
    repayment()

} );









