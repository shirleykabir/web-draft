function getLevelTag(l) {
    console.log(l);
    if(l==0) {
        return "<br><div class='level-tag' style='background-color: #0027FF;'>pilot</div><br></a>";
    }
    else if(l==1) {
        return "<br><div class='level-tag' style='background-color: #E22828;'>first class</div><br></a>";
    }
    else if(l==2) {
        return "<br><div class='level-tag' style='background-color: #707070;'>business class</div><br></a>";
    }
    else {
        return "<br><div class='level-tag' style='background-color: #D6D6D6;'>economy class</div><br></a>";
    }
}
d3.csv("./data/sponsors.csv", function(data) {
    data.forEach(function(s){
        $("#all-sponsors").append("<a href='" + s.link + "'><img src='" + s.image + "' width='" + s["img-width"] +"'><br><h6>" + s.company + "</h6>" + getLevelTag(s.level));
    });
});


