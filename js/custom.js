/*global $, console, alert */
$(document).ready(function () {
    'use strict';
    
    var link = $(".navbar .links ul li a");
    link.click(function () {
        $(this).addClass('active').parent().siblings().children().removeClass("active");
        
    });

    $(document).ready(function () {
        $('.bxslider').bxSlider();
    });    
    // get welcome to center 
    
   /* $(".welcome").css("paddingTop", ($(window).height() - $(".welcome").height()) / 2);
    $(window).resize(function () {
        
        $(".welcome").css("paddingTop", ($(window).height() - $(".welcome").height()) / 2);
    }); */
    
    // adjust slider 
    $('.bx-wrapper').each(function () {
        $(this).css('paddingTop', ($('.header').height() - $('.header .bxslider li').height()) / 2); 
        
    });
    

});
    // make header size 
   /*     $(".header").height($(window).height());

    $(window).resize(function () {
        'use strict';
        $(".header").height($(window).height());
        
    }); */
    // make simple slider for trstimonials 
    
(function autoslider() {
    'use strict';
    $('.slider .selected').each(function () {

        if (!$(this).is(':last-child')) {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('selected').next().addClass('selected').fadeIn();
                autoslider();
            });
        } else {
            $(this).delay(3000).fadeOut(1000, function () {
                $(this).removeClass('selected');
                $('.slider div').eq(0).addClass('selected').fadeIn();
                autoslider();
            });
        }
    });
        
}());

// nice scroll togle
// Show Overflow of Body when Everything has Loaded //
// mixtup toogle 

var mixer = mixitup('#container');

// toggle class active for portofolio
var linker = $(".portofolio ul li");
linker.click(function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass("active");

});  

//smooth scroll 
$('.navbar .links ul li a').click(function () {
    'use strict';
    $('html', 'body').animate({
        scrollTop : $('#' + $(this).data('value')).offset()
    }, 2000);
});

// test 


$(window).scroll(function () {
    'use strict';
    $('.navbar').css({
        'backgroundColor': 'rgba(0, 0, 0, 0.5)',
        'position': 'fixed',
        'color': '#fff',
        'height': '86px'
    }); 
    $('.navbar .brand').css({
        'margin-top': '-25px',
    });
    $('.navbar .brand img').fadeOut(500);
    $('.navbar .links').css({
        'paddingTop': '9px',
        'fontSize': '15px'
    });
});


