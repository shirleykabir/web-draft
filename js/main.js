// Fill In Navigation

var navigationLinks = {
    "About": "/index.html",
    "The Team": "/the-team.html",
    "Aircraft": "/aircraft.html",
    "Recruitment": "/recruitment.html",
    "Sponsors": "/sponsors.html",
    "Contact Us": "/contact-us.html",
    "Apply Now!": "https://goo.gl/forms/WOQdGBSn8sqMEdYk1"
};

function convertToClassName(url) {
    var urlCropped = url.split("/").pop();
    return urlCropped.substring(0, urlCropped.length-5);
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
var path = window.location.pathname.split("/").pop();
var activeLink;

if (path == "index.html" || path == "the-team.html" || path == "aircraft.html" || path == "recruitment.html" || path == "sponsors.html" || path == "contact-us.html") {
    activeLink = "." + convertToClassName(path);
} else if (path == "/" || path=="") {
    activeLink = "." + convertToClassName("index");
} else {
    activeLink = "." + convertToClassName("the-team");
}
$(activeLink).append("<svg class='hoverLine'><line x1='0' y1='35' x2='100' y2='20' stroke='#E8000060' stroke-width='7' /></svg>");


function openMenu() {
    $( "#navigation" ).animate({
        opacity: 1,
        top: "0vh",
      }, 2000, function() {
        document.getElementsByClassName("mobile-close")[0].style.display="block";
    });
    
}

function closeMenu() {
    document.getElementsByClassName("mobile-close")[0].style.display="none";
    $( "#navigation" ).animate({
        opacity: 0,
        top: "-200vh",
      }, 2000, function() {
        // Animation complete.
    });
}


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-124645730-1');