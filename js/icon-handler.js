/////////////////////////////////
// Icon Handler		       //
// Handles the two icons used. //
/////////////////////////////////
var load_canvas = function () {
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
};
