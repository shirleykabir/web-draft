var pathUncropped = window.location.pathname.split("/").pop();

var path = pathUncropped.substring(0, pathUncropped.length-5);
var subteam, img_path;

switch(path) {
    case "full-team-leads":
        subteam = 0;
        break;
    case "airframe":
        subteam = 1;
        break;
    case "autopilot":
        subteam = 2;
        break;
    case "design-and-operations":
        subteam = 3;
        break;
    case "electrical":
        subteam = 4;
        break;
    case "mechanical":
        subteam = 5;
        break;
    case "platform":
        subteam = 6;
        break;
    default:
        subteam = 7;
}

switch(path) {
    case "design-and-operations":
        img_path = "desops";
        break;
    case "full-team-leads":
        img_path = "leads";
        break;
    default:
        img_path = path
}

function getIsTeamLead(lead) {
    if(lead == '0') {
        return "Team Member";
    }
    else {
        return "Team Lead";
    }
}

function getLinkedinLink(url) {
    if(url.length > 0) {
        return "<a href='" + url + "'><img src='static/social-media/linkedin-logo.svg' width='20'/></a>";
    }
    else {
        return "";
    }
}

function getGithubLink(url) {
    if(url.length > 0) {
        return "<a href='" + url + "'><img src='static/social-media/github-logo.svg' width='20'/></a>";
    }
    else {
        return "";
    }
}

function getPersonalLink(url) {
    if(url.length > 0) {
        return "<a href='" + url + "'><img src='static/social-media/programming.svg' width='20'/></a>";
    }
    else {
        return "";
    }
}

function getAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
function getGraduationYear(year) {
    console.log(year);
    var gradYear = 2019 + Number(year);
    return gradYear;
}

{/* <div class='member-full-info'><h3>" + member["first-name"] + " " + member["last-name"] + "</h3></div> */}
d3.csv("./data/members.csv", function(data) {
    data.forEach(function(member){
        if(member.id!="" && member.subteam==subteam) {
            $("#members-preview").append("<a onclick='openModal(this)' class='" + member.netid + "'><div class='member-item'><img src='" + member["img-src1"].substring(1) + "' class='member-bw'><div class='member-preview-info'><h3>" + member["first-name"] + " " + member["last-name"] + "</h3><h6>" + getIsTeamLead(member.lead) + "</h6>" + getLinkedinLink(member["linkedin"]) + getGithubLink(member["github"]) + getPersonalLink(member["website"]) + "</div><div class='member-full member-full-info-" + member.netid + "'><div class='clip-member-color'><img class='member-color' src='" + member["img-src2"].substring(1) + "'/></div><h3>" + member["first-name"] + " " + member["last-name"] + "</h3><div class='member-more-info'><a id='closeButton' onclick='closeModal(this)' class='" + member.netid + "'><b>close</b></a><h4>Hi, I am a " + getAge(member["date-of-birth"]) + " y/o " + member.major + " major, graduating in " + getGraduationYear(member.year) + " from C/o Engineering.</h4><p>" + member.bio + "</p></div></div></div></a>");
        }
    });
});

$("#subteam-description").append("<div class='clip-subteam-image'><img class='header' src='static/subteams/" + img_path + "/2018.jpg'></div>");

d3.csv("./data/subteams.csv", function(data) {
    data.forEach(function(s) {
        if(s.id == subteam) {
            $("#subteam-description").append("<div class='subteam-description-full'>" + s["full-desc"] + "</div>");
        }
    });
});

function closeModal(member) {
    var netid = member.className;
    var locator = "member-full-info-" + netid;
    // document.getElementsByClassName(locator)[0].style.display = "none";
    document.getElementsByClassName(locator)[0].style.top = "100vh";
}

function openModal(member) {
    var netid = member.className;
    var locator = "member-full-info-" + netid;
    // document.getElementsByClassName(locator)[0].style.display = "block";
    document.getElementsByClassName(locator)[0].style.top = "0vh";
}