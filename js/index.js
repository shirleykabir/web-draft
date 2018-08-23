
// Video

var promoVideo = document.getElementById("promo-video");
var playButton = document.getElementsByClassName("play")[0];

// promoVideo.poster = "../static/promo-poster.jpg";

function playVideo() {
    $( ".video-cover" ).removeClass( "covered" );
    promoVideo.play();
    $('.play').hide();
    $('.pause').show();
}

function pauseVideo() {
    $('.pause').hide();
    $( ".video-cover" ).addClass( "covered" );
    promoVideo.pause();
    $('.play').show();
}

$(document).ready(function () {
    $('#video video').on('ended', function () {
        $('.play').show();
        $('.pause').hide();
        $( ".video-cover" ).addClass( "covered" );
    });
});

d3.csv("./data/advisors.csv", function (data) {
    data.forEach(function (advisor) {
        $("#advisors .row").append("<div class='col-sm'><i>0" + advisor.id + "</i><img src='" + advisor["img-src"] + "'><h4>" + advisor.name + "</h4><p>" + advisor.description + "</p></div>");
    });
});