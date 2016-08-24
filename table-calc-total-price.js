function calc_total() {
    
    var subtotal = 0;
    $(".count").each(function( index ) {
        var item_price = $(this).find('td:eq(2) span').text();
        var amount = $(this).find('.quantity').val();
        var item_total = Number(item_price) * Number(amount);
        subtotal = subtotal + item_total;
        //console.log( item_total );
    });
    //console.log( subtotal );
    
    $("#subtotal").text(subtotal);
    $("#discount").text((subtotal/100)*25);
    $("#total").text( Number($("#subtotal").text()) + Number($("#discount").text()) );
    
}
