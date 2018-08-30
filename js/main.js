// Fill In Navigation

var navigationLinks = {
    "About": "/web-draft/index.html",
    "The Team": "/web-draft/the-team.html",
    "Aircraft": "/web-draft/aircraft.html",
    "Recruitment": "/web-draft/recruitment.html",
    "Sponsors": "/web-draft/sponsors.html",
    "Contact Us": "/web-draft/contact-us.html",
    "Apply Now!": "/web-draft/apply-now.html"
};

function convertToClassName(url) {
    return url.substring(11,11+(url.length-16));
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

if (path == "/web-draft/index.html" || path == "/web-draft/the-team.html" || path == "/web-draft/aircraft.html" || path == "/web-draft/recruitment.html" || path == "/web-draft/sponsors.html" || path == "/web-draft/contact-us.html") {
    activeLink = "." + convertToClassName(path);
} else if (path == "/" || path=="/web-draft/") {
    activeLink = "." + convertToClassName("/web-draft/index.html");
} else {
    activeLink = "." + convertToClassName("/web-draft/the-team.html");
}
$(activeLink).append("<svg class='hoverLine'><line x1='0' y1='35' x2='100' y2='20' stroke='#E8000060' stroke-width='7' /></svg>");

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-124645730-1');