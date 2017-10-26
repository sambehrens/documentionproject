$(document).ready(function() {
    $( document ).on( 'click', '.image', function () {
        $(this).addClass('enlarge');
        $(this).css({
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2}
        });
        $('body').css("overflow", "hidden");
        $('.darken').show();
    });
    $( document ).on( 'click', '.enlarge', function () {
        $(this).removeClass('enlarge');
        $(this).css('margin', 'auto');
        $('body').css("overflow", "auto");
        $('.darken').hide();
    });
});
