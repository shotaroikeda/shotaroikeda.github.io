function docFill() {
    if($(document).height() <= $(window).height())
    {
	var temp_h = $(window).height() + ($("body").height() - $(".sidebar-elem").height());
        $(".restFill").css("height", $(document).height() - $(".sidebar-elem").height());
	console.log(temp_h);
    }
    else
    {
        $(".restFill").css("height","auto");
    };
};

$(document).ready(docFill);
$(window).resize(function () {
    console.log("window was detected for resize!");
    docFill();
});
