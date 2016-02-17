/////////////////////////////////////////////////////////
// Handlers                                            //
// Various handlers for GUI. Animations should go here //
/////////////////////////////////////////////////////////
function arrow_animate(clicked_data)
{
    var domElem = clicked_data.data[0];
    // Check if the current arrow was clicked again
    if ($(domElem).children()[0].className == "col-xs-1 bar-box active-page")
    {
        return;
    }
    else
    {
        // Handle the fading animations
        $(".active-page > .arrow-vertical-center > span").fadeOut(400, function () {
            $(".active-page > .arrow-vertical-center > span").remove();
            $(".active-page").removeClass("active-page");
            $(domElem).find(".col-xs-1").addClass("active-page");
            $(".active-page > .arrow-vertical-center")
                .append("<span class=\"arrow\" style=\"display: none;\">&#x25BA;</span>");
            $(".active-page > .arrow-vertical-center > span").fadeIn(400);
        });

        // Handle the document animations
    }
}

var activate_event_handlers = function () {
    function scrollListener(element) {
        element.addEventListener("touchstart", function () {
            var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;
            if ( top === 0 ) {
                element.scrollTop = 1;
            } else if ( currentScroll === totalScroll ) {
                element.scrollTop = top - 1;
            }
        });
    }

    // Event listeners for Sidebar
    $("#home-page").click(["#home-page"], arrow_animate);
    $("#projects-page").click(["#projects-page"], arrow_animate);
    $("#events-page").click(["#events-page"], arrow_animate);
    $("#contact-page").click(["#contact-page"], arrow_animate);
    // Mobile only here
    $("#menu-icon-canvas").click(function () {
        $(".content-portion").addClass("no-scroll");
        $(".sidebar-elem").show();
        $("#menu-icon-canvas").fadeOut(400, function (){
            $(".sidebar-elem").animate({ "right": "+=" + (window.innerWidth - 10) }, 400);
            $("#menu-close-canvas").fadeIn(400);
        });
    });
    $("#menu-close-canvas").click(function () {
        $(".content-portion").removeClass("no-scroll");
        $("#menu-close-canvas").fadeOut(400);
        $(".sidebar-elem").animate({ "right": "-=" + (window.innerWidth - 10) }, 400, function() {
            $("#menu-icon-canvas").fadeIn(800);
        });
    });

    // Fix ios closing bug using this
    scrollListener(document.querySelector(".sidebar-elem"));
};
