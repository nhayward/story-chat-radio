var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function swapHeaderLogoOnScroll() {
    // Has scrolled class on header
    var zvalue = jQuery(document).scrollTop();
    if ( zvalue > 75 ) {
        jQuery("#header .logo img").attr("src", "/user/themes/story-chat/images/logo/StoryChatRadio_nav.png");
        jQuery(".mobile-logo img").addClass("mobile-scrolled");
    } else {
        jQuery("#header .logo img").attr("src", "/user/themes/story-chat/images/logo/StoryChatRadio_nav_inverted.png");
        jQuery(".mobile-logo img").removeClass("mobile-scrolled");
    }
}

jQuery(document).ready(function() {

    swapHeaderLogoOnScroll();

    // Scroll Events
    if (!isTouch){
        jQuery(document).scroll(function() {
            swapHeaderLogoOnScroll();
        });
    };

    // Touch scroll
    jQuery(document).on({
        'touchmove': function(e) {
            swapHeaderLogoOnScroll(); // Replace this with your code.
        }
    });

    // set noopener noreferrer on all target _blank links for security
    $('a[target="_blank"]').each(function() {
        $(this).attr('rel', 'noopener noreferrer');
    });

});
