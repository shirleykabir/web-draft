var subteamNav = document.getElementById("subteam-navigation");
var subteamLinks;

d3.csv("./data/subteams.csv", function(data) {
    subteamLinks = data;
    data.forEach(function(subteam) {
        $("#subteam-navigation").append("<li><a onmouseover='showSubteamDetails(this)' onmouseleave='hideSubteamDetails(this)' href=" + '/web-draft' + subteam.page+ " class='" + subteam["img-src1"] + "'>" + subteam.name + "</a></li>");
        $("#subteam-preview").append("<div class='" + subteam["img-src1"] + "-preview subteam-preview'></div>");
        document.getElementsByClassName(subteam["img-src1"] + "-preview")[0].style.backgroundImage = "url('static/subteams/" + subteam["img-src1"] + ".jpg')";
    });
});

function getDescriptionOfSubteam(name) {
   for(var b = 0; b<subteamLinks.length; b++) {
       if(subteamLinks[b]["img-src1"]==name) {
           return subteamLinks[b]["mini-desc"];
       }
   }
}

document.getElementsByClassName("subteam-preview").display = "none";
function showSubteamDetails(subteam) {
    document.getElementsByClassName(subteam.className + "-preview")[0].style.opacity = "1";
    document.getElementById("subteam-preview-description").innerHTML = "<span>" + getDescriptionOfSubteam(subteam.className) + "</span>";
    
}

function hideSubteamDetails(subteam) {
    document.getElementsByClassName(subteam.className + "-preview")[0].style.opacity = "0";
    document.getElementById("subteam-preview-description").innerHTML = "";
}