fontSize();
$(window).resize(function () {
    fontSize();
});

function fontSize() {
    var size;
    var winW = $(window).width();
    if (winW <= 1600 && winW > 800) {
        size = Math.round(winW / 16);
    } else if (winW <= 800) {
        size = Math.round(winW / 7.5);
        if (size > 65) {
            size = 65;
        }
    } else {
        size = 100;
    }
    $('html').css({
        'font-size': size + 'px'
    });
}



