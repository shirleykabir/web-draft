// Frequently Asked Questions
var expandables = $(".expand");
console.log(expandables);
for (var i = 0; i < expandables.length; i++) {
    expandables[i].addEventListener("click", function () {
        if ($(this).parent().height() == 28) {
            var autoHeight = $(this).parent().css('height', 'auto').height();
            $(this).parent().height(28);
            $(this).parent().stop().animate({
                height: autoHeight
            }, 500);
        } else {
            $(this).parent().stop().animate({
                height: '60'
            }, 500);
        }
        $(this).parent().toggleClass("opened"), 500;
        $(this).toggleClass("open-question", 500);
    });
}