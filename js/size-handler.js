////////////////////////////////////////////////////////////
// Size Handler						  //
// Handles all of the resize/window size related actions. //
// Call for every resize.				  //
////////////////////////////////////////////////////////////
var mobile_view = false;
var g_doc_height = 0;

function docFill() {
    var prev_doc = g_doc_height;
    g_doc_height = $(".container-fluid").height();
    $(".restFill").css({
        "height":0
    });

    $(".restFill").css({
        "height": g_doc_height-$(".sidebar-elem").height()
    });
};

function size_handler()
{
    if (window.innerWidth <= 991 || screen.width <= 991)
    {
        $(".sidebar-elem").addClass("mobile-menu");
        // Set up formatting to reduce bugs
        $("#menu-icon-canvas").css({
            "top": 0,
            "right": 0,
            "width": "50px",
            "height": "50px",
            "z-index": 999,
            "overflow": "hidden",
            "position": "fixed"
        });
        $("#menu-close-canvas").css({
            "top": 0,
            "right": 0,
            "width": "25px",
            "height": "25px",
            "z-index": 999,
            "overflow": "hidden",
            "position": "fixed"
        });
        $(".mobile-menu").css({
            "position": "fixed",
            "z-index": 998,
            "top": "0",
            "bottom": "0",
            "right": (-1 * window.innerWidth) + "px",
            "text-align": "center",
            "font-size": "200%",
            "overflow-x": "hidden",
            "overflow-y": "scroll",
            "width": (window.innerWidth - 10) + "px"
        });

        $("#menu-icon-canvas").show();
        $("#menu-close-canvas").hide();
        $(".sidebar-elem").hide();
        $(".sidebar-elem > .restFill").remove();
        mobile_view = true;
    }
    else
    {
        $("#menu-icon-canvas").hide();
        $("#menu-close-canvas").hide();
        $(".sidebar-elem").removeClass("mobile-menu");
        $(".sidebar-elem").css({
            "position": "static",
            "right": 0,
            "width": "100%",
            "overflow": "visible",
            "overflow-x": "visible",
            "overflow-y": "visible"
        });
        $(".sidebar-elem").show(0, function () {
            if (mobile_view)
            {
                $(".sidebar-elem").append("<div class=\"restFill\"></div>");
                g_doc_height = 0;
                docFill();
            }
            mobile_view = false;
        });
    }
}

var load_handler = function ()
{
    docFill();
    size_handler();
};
