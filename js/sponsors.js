d3.csv("./data/sponsors.csv", function(data) {
    data.forEach(function(s){
        $("#all-sponsors").append("<a href='" + s.link + "'><img src='" + s.image + "' width='" + s["img-width"] +"'><br><h6>" + s.company + "</h6></a>");
    });
});


