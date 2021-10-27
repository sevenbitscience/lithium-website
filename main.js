$(document).ready(function () {    
    var headerclosed = false;

    $(window).scrollTop(0);
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 10 && headerclosed == false) {
            headerclosed = true;
            $(".elemname").fadeOut(300);
            $(".element").animate({width: '4.4rem', height: '4.5rem', fontSize: '0.8rem'}, 500, "linear");
            $(".elemnum, .elemmass").animate({fontSize: '1rem'});
        } else if ($(document).scrollTop() < 5 && headerclosed == true) {
            headerclosed = false;
            $(".elemnum, .elemmass").animate({fontSize: '0rem'});
            $(".element").animate({width: '17rem', height: '5rem', fontSize: '1.8rem'}, 300);
            $(".elemname").fadeIn();
        }
      });
});