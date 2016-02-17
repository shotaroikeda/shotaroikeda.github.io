$(document).ready(function () {
    // Set up the arrow to corresponding page
    $(".active-page > .arrow-vertical-center").append("<span class=\"arrow\">&#x25BA;</span>");

    // Call the handlers in order
    load_canvas();
    load_handler();
    activate_event_handlers();
});

$(window).resize(function () {
    load_handler();
});
