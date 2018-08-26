// Fill In Navigation

var navigationLinks = {
    "About": "/index.html",
    "The Team": "/the-team.html",
    "Aircraft": "/aircraft.html",
    "Recruitment": "/recruitment.html",
    "Sponsors": "/sponsors.html",
    "Contact Us": "/contact-us.html"
};

function convertToClassName(url) {
    return url.substring(1, url.length - 5);
}

var navigationContainer = document.getElementById("navigation");
var navigationHTML = "<ul>";

Object.keys(navigationLinks).forEach(function (key) {
    navigationHTML = navigationHTML + "<li class='" + convertToClassName(navigationLinks[key]) + "'><a href=" + navigationLinks[key] + ">" + key + "</a></li>";
});
navigationHTML += "</ul>";

navigationContainer.innerHTML = navigationHTML;

// Footer
var footerHTML = "<ul>";

Object.keys(navigationLinks).forEach(function (key) {
    footerHTML = footerHTML + "<li><a href=" + navigationLinks[key] + ">" + key + "</a></li>";
});
footerHTML += "</ul>";

$('.site-map')[0].innerHTML = footerHTML;

// Highlighting Active Page
var path = window.location.pathname;
var activeLink;

if (path == "/index.html" || path == "/the-team.html" || path == "/aircraft.html" || path == "/recruitment.html" || path == "/sponsors.html" || path == "/contact-us.html") {
    activeLink = "." + convertToClassName(path);
} else if (path == "/") {
    activeLink = "." + convertToClassName("/index.html");
} else {
    activeLink = "." + convertToClassName("/the-team.html");
}
$(activeLink).append("<svg class='hoverLine'><line x1='0' y1='35' x2='100' y2='20' stroke='#E8000060' stroke-width='7' /></svg>");
// $("#navigation a").append("<svg class='hoverLine'><line x1='0' y1='35' x2='100' y2='20' stroke='#E8000018' stroke-width='5' /></svg>");

// Video Progress Bar