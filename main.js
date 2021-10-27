$(document).ready(function () {
    $(".elemname").hide(0);
    
    var offset = $(".header").offset();
    var top = offset.top;
    var left = offset.left;
    var headerclosed = false;
    

    $(window).scroll(function() {
        if ($(document).scrollTop() > 10 && headerclosed == false) {
            $(".header").addClass("sticky");
            headerclosed = true;
            $(".elemname").fadeOut(300);
            $(".element").animate({width: '4.4rem', height: '4.5rem', fontSize: '0.8rem'}, 500, "linear");
            $(".elemnum, .elemmass").slideDown(250);
        } else if ($(document).scrollTop() < 5 && headerclosed == true) {
            $(".header").removeClass("sticky");
            headerclosed = false;
            $(".elemnum, .elemmass").slideUp(300)
            $(".element").animate({width: '17rem', height: '5rem', fontSize: '1.8rem'}, 300);
            $(".elemname").fadeIn();
        }
      });
});