$(".elem-test").click(function () { 
    $(".elemnum").slideToggle(300);
    $(".elemmass").slideToggle(300);
    $(".element").animate({width: '15rem', height: '4rem', margin: '2'}, 800);
    $(".elemsymb").animate({ fontSize: '4em'});
    $(".elemname").toggle();
});

$(document).ready(function () {
    $(".elemname").hide(0);
});