var g_doc_height = 0;
var mobile_view = false;

function docFill() {
    var prev_doc = g_doc_height;
    g_doc_height = $(".container-fluid").height();// > g_doc_height ? $(document).height() : g_doc_height;
    $(".restFill").css({
        "height":0
    });

    $(".restFill").css({
        "height": g_doc_height-$(".sidebar-elem").height()
    });
};

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

function size_handler()
{
    if (window.innerWidth < 992 || screen.width < 992)
    {
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
            "left": 0,
            "width": "50px",
            "height": "50px",
            "z-index": 999,
            "overflow": "hidden",
            "position": "fixed"
        });
        $(".mobile-menu").css({
            "position": "fixed",
            "z-index": 998,
            "top": "0",
            "bottom": "0",
            "right": "-320px",
            "text-align": "center",
            "font-size": "200%",
            "overflow-x": "hidden",
            "overflow-y": "scroll",
            "width": "320px"
        });

        $("#menu-icon-canvas").show();
        $("#menu-close-canvas").hide();
        $(".sidebar-elem").hide();
        $(".sidebar-elem").addClass("mobile-menu");
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

$(document).ready(function () {
    // draw the canvas for resize
    var can = document.getElementById("menu-icon-canvas");
    var ctx = can.getContext('2d');
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    };
    img.src = "src/menu-small.svg";

    var can2 = document.getElementById("menu-close-canvas");
    var ctx2 = can2.getContext('2d');
    var img2 = new Image();
    img2.onload = function () {
        ctx2.drawImage(img2, 0, 0);
    };
    img2.src = "src/menu-close.svg";

    $("#menu-close-canvas").hide();

    docFill();
    size_handler();
    // Set up the arrow to corresponding page
    $(".active-page > .arrow-vertical-center").append("<span class=\"arrow\">&#x25BA;</span>");

    // add event listeners
    $("#home-page").click(["#home-page"], arrow_animate);
    $("#projects-page").click(["#projects-page"], arrow_animate);
    $("#events-page").click(["#events-page"], arrow_animate);
    $("#contact-page").click(["#contact-page"], arrow_animate);
    $("#menu-icon-canvas").click(function () {
        $(".sidebar-elem").show();
        $("#menu-icon-canvas").fadeOut(400, function (){
            $(".sidebar-elem").animate({ "right": "+=320px" }, 400);
            $("#menu-close-canvas").fadeIn(400);
        });
    });

    $("#menu-close-canvas").click(function () {
        $("#menu-close-canvas").fadeOut(400);
        $(".sidebar-elem").animate({ "right": "-=320px" }, 400, function() {
            $("#menu-icon-canvas").fadeIn(800);
        });
    });
});

$(window).resize(function () {
    docFill();
    size_handler();
});
