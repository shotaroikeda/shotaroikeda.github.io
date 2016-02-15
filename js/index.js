var g_doc_height = 0;


function docFill() {
    if($(document).height() <= $(window).height())
    {
        var prev_doc = g_doc_height;
        g_doc_height = $(document).height() > g_doc_height ? $(document).height() : g_doc_height;

        if (prev_doc == g_doc_height)
            return;
        else
            $(".restFill").css("height", g_doc_height - $(".sidebar-elem").height());
    }
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
        $(".active-page > .vertical-center > span").fadeOut(400, function () {
            $(".active-page > .vertical-center > span").remove();
            $(".active-page").removeClass("active-page");
            $(domElem).find(".col-xs-1").addClass("active-page");
            $(".active-page > .vertical-center")
                .append("<span class=\"arrow\" style=\"display: none;\">&#x25BA;</span>");
            $(".active-page > .vertical-center > span").fadeIn(400);
        });

        // Handle the document animations
    }
}

$(document).ready(function () {
    docFill();
    // Set up the arrow to corresponding page
    $(".active-page > .vertical-center").append("<span class=\"arrow\">&#x25BA;</span>");

    // add event listeners
    $("#home-page").click(["#home-page"], arrow_animate);
    $("#projects-page").click(["#projects-page"], arrow_animate);
    $("#events-page").click(["#events-page"], arrow_animate);
    $("#contact-page").click(["#contact-page"], arrow_animate);
});

$(window).resize(function () {
    docFill();
});
