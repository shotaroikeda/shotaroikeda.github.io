function docFill() {
    if($(document).height() <= $(window).height())
    {
        $(".restFill").css("height",$(window).height() + ($("body").height() - $(".sidebar-elem").height()));
    }
    else
    {
        $(".restFill").css("height","auto");
    };
};

$(document).ready(docFill);
$(window).resize(docFill);
