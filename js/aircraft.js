function getFRRReview(frr) {
    if(frr=="") {
        return ""
    }
    return "<a href='" + frr + "' class='frr'>Watch the Flight Readiness Review<b>➜</b></a>";
}

d3.csv("./data/aircraft.csv", function(data) {
    data.slice(1).forEach(function(aircraft){
        $("#previous-aircraft .container").append("<center><img src='static/aircraft/" + aircraft["img-src"] + "'></center><br><div class='row'><div class='col-4'><div class='row small-data'><div class='col-4 key'>Year</div><div class='col-8 value'>" + aircraft.year + "</div></div><div class='row small-data'><div class='col-4 key'>Size</div><div class='col-8 value'>" + aircraft.wingspan + "</div></div><div class='row small-data'><div class='col-4 key'>Weight</div><div class='col-8 value'>" + aircraft.weight + "</div></div><div class='row small-data'><div class='col-4 key'>Placings</div><div class='col-8 value'>" + aircraft.overall + " overall<br>" + aircraft.mission + " mission<br>" + aircraft.frr + " flight readiness review<br>"+ aircraft["journal-paper"] + " journal paper</div></div></div><div class='col-8'><h4>" + aircraft.name + "</h4><p>" + aircraft.description + "</p></div></div><div class='aircraft-external-links'><div class='row'><div class='col-5'><a href='" + aircraft["journal-paper"] + "' class='journal-paper'>Read the Journal Paper<b>➜</b></a></div><div class='col-7'>" + getFRRReview(aircraft["frr-link"]) + "</div></div></div>");
    });
});

var nonagons = [ { "x": 75,   "y": 17},  { "x": 105,  "y": 3},
                 { "x": 145,  "y": 06}, { "x": 181,  "y": 35},
                 { "x": 189,  "y": 85},  { "x": 168, "y": 122},
                 { "x": 127,  "y": 140},  { "x": 87, "y": 132},
                 { "x": 58,  "y": 101},  { "x": 52, "y": 62},
                 { "x": 75,   "y": 17}];
var foundedHighlighted = [ { "x": 75,   "y": 17},  { "x": 105,  "y": 3},
                 { "x": 145,  "y": 06}, { "x": 181,  "y": 35},
                 { "x": 189,  "y": 85},  { "x": 168, "y": 122}];
var membersHighlighted = [ { "x": 52, "y": 62}, { "x": 75,   "y": 17},  
                 { "x": 105,  "y": 3}, { "x": 145,  "y": 06}, { "x": 181,  "y": 35},
                 { "x": 189,  "y": 85},  { "x": 168, "y": 122},
                 { "x": 127,  "y": 140},  { "x": 87, "y": 132},
                 { "x": 58,  "y": 101}];
var subteamsHighlighted = [ { "x": 52, "y": 62}, { "x": 75,   "y": 17},  
                 { "x": 105,  "y": 3}, { "x": 145,  "y": 06}, { "x": 181,  "y": 35}];
//This is the accessor function we talked about above
var lineFunction = d3.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .curve(d3.curveLinear);

//The SVG Container
var svgContainer = d3.select("#placement").append("svg")
                                    .attr("width", 700)
                                    .attr("height", 300);

//The line SVG Path we draw
var founded = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','scale(0.7) translate(50,160)');

var foundedHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(foundedHighlighted))
                            .attr("stroke", "#E22828")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "foundedLine")
                            .attr('transform','scale(0.7) translate(50,160)');

var members = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','scale(0.7) rotate(-10) translate(150,100)');

var membersHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(membersHighlighted))
                            .attr("stroke", "#0027FF")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "membersLine")
                            .attr('transform','scale(0.7) rotate(-10) translate(150,100)');
 
var subteams = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','scale(0.7) rotate(5) translate(330,140)');
var subteamsHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(subteamsHighlighted))
                            .attr("stroke", "#242424")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "subteamsLine")
                            .attr('transform','scale(0.7) rotate(5) translate(330,140)');

svgContainer.append("text")
    .attr("x", 155)
    .attr("y", 240)
    .attr("class", "stats-bold")
    .text("4")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 150)
    .attr("y", 270)
    .attr("class", "stats-regular")
    .text("overall")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 285)
    .attr("y", 130)
    .attr("class", "stats-bold")
    .text("1")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 247)
    .attr("y", 150)
    .attr("class", "stats-regular")
    .text("technical design")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 420)
    .attr("y", 250)
    .attr("class", "stats-bold")
    .text("1")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 380)
    .attr("y", 280)
    .attr("class", "stats-regular")
    .text("flight readiness")
    .attr('transform','scale(0.7)');

svgContainer.append("text")
    .attr("x", 415)
    .attr("y", 295)
    .attr("class", "stats-regular")
    .text("review")
    .attr('transform','scale(0.7)');