var path = window.location.pathname.substring(1, window.location.pathname.length-5);
var subteam;

switch(path) {
    case "airframe":
        subteam = 0;
        break;
    case "autopilot":
        subteam = 1;
        break;
    case "design-and-operations":
        subteam = 2;
        break;
    case "electrical":
        subteam = 3;
        break;
    case "mechanical":
        subteam = 4;
        break;
    case "platform":
        subteam = 5;
        break;
    case "full-team-leads":
        subteam = 6;
        break;
    default:
        subteam = 7;
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
d3.csv("../data/members.csv", function(data) {
    data.forEach(function(member){
        if(member.id!="") {
            $("#members-preview").append("<a onclick='openModal(this)' class='" + member.netid + "'><div class='member-item'><img src='" + member["img-src1"]+ "' class='member-bw'><div class='member-preview-info'><h3>" + member["first-name"] + " " + member["last-name"] + "</h3><h6>" + getIsTeamLead(member.lead) + "</h6>" + getLinkedinLink(member["linkedin"]) + getGithubLink(member["github"]) + getPersonalLink(member["website"]) + "</div><div class='member-full member-full-info-" + member.netid + "'><div class='clip-member-color'><img class='member-color' src='" + member["img-src2"] + "'/></div><h3>" + member["first-name"] + " " + member["last-name"] + "</h3><div class='member-more-info'><a id='closeButton' onclick='closeModal(this)' class='" + member.netid + "'><b>close</b></a><h4>Hi, I am a " + getAge(member["date-of-birth"]) + " y/o " + member.major + " major, graduating in " + getGraduationYear(member.year) + " from C/o Engineering.</h4><p>" + member.bio + "</p></div></div></div></a>");
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