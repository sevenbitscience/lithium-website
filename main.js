$(document).ready(function () {    
    var headerclosed = false;

    $(window).scrollTop(0);
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 3 && headerclosed == false) {
            headerclosed = true;
            $(".elemname").fadeOut(300);
            $(".element").animate({fontSize: '0.8rem', width: '4.4rem', height: '4.2rem'}, 300, "linear");
            $(".content").animate({paddingTop: '8.5rem'}, 300);
            $(".elemnum, .elemmass").animate({fontSize: '0.8rem'}, 50);
        } else if ($(document).scrollTop() < 4 && headerclosed == true) {
            headerclosed = false;
            $(".elemnum, .elemmass").animate({fontSize: '0rem'}, 100);
            $(".element").animate({width: '18rem', height: '5.2rem', fontSize: '2rem'}, 300);
            $(".content").animate({paddingTop: '9rem'}, 300);
            $(".elemname").fadeIn();
        }
      });
});