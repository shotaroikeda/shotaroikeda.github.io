var g_doc_height = 0;

function docFill() {
    if($(document).height() <= $(window).height())
    {
	var prev_doc = g_doc_height;
	g_doc_height = $(document).height() > g_doc_height ? $(document).height : g_doc_height;

	if (prev_doc == g_doc_height)
	    return;
	else
            $(".restFill").css("height", g_doc_height - $(".sidebar-elem").height());
    }
};

$(document).ready(docFill);
$(window).resize(function () {
    console.log("window was detected for resize!");
    docFill();
});
