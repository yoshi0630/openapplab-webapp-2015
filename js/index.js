$(function() {
    var snapper = new Snap({
        element: document.getElementById("contents"),
        disenable: 'right',
        maxPosition: 1000,
        minPosition: -1000,
        tapToClose: true,
        addBodyClasses: true,
        hyperextensible: true,
        resistance: 0.5,
    });
    $(".ham").click(function() {
        snapper.open('right');
    });
    $("#close").click(function() {
        snapper.close();
    });

    $("#headroom").headroom({
        "tolerance": 7,
        "offset": 205
    });
});
