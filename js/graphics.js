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
var yearsHighlighted = [ 
                 { "x": 181,  "y": 35},
                 { "x": 189,  "y": 85},  { "x": 168, "y": 122},
                 { "x": 127,  "y": 140},  { "x": 87, "y": 132},
                 { "x": 58,  "y": 101}, { "x": 52, "y": 62}];
var firstsHighlighted = [ 
                    { "x": 189,  "y": 85},  { "x": 168, "y": 122},
                    { "x": 127,  "y": 140},  { "x": 87, "y": 132}];
//This is the accessor function we talked about above
var lineFunction = d3.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .curve(d3.curveLinear);

//The SVG Container
var svgContainer = d3.select("#statistics").append("svg")
                                    .attr("width", 1000)
                                    .attr("height", 300);

//The line SVG Path we draw
var founded = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','translate(0,100)');

var foundedHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(foundedHighlighted))
                            .attr("stroke", "#E22828")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "foundedLine")
                            .attr('transform','translate(0,100)');

var members = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','rotate(-10) translate(150,100)');

var membersHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(membersHighlighted))
                            .attr("stroke", "#0027FF")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "membersLine")
                            .attr('transform','rotate(-10) translate(150,100)');
 
var subteams = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','rotate(5) translate(380,50)');
var subteamsHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(subteamsHighlighted))
                            .attr("stroke", "#B70000")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "subteamsLine")
                            .attr('transform','rotate(5) translate(380,50)');
 
var years = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','rotate(-5) translate(550,100)');

var yearsHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(yearsHighlighted))
                            .attr("stroke", "#242424")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "yearsLine")
                            .attr('transform','rotate(-5) translate(550,100)');
                            
var firsts = svgContainer.append("path")
                            .attr("d", lineFunction(nonagons))
                            .attr("stroke", "#707070")
                            .attr("stroke-opacity", "0.4")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                            .attr('transform','rotate(0) translate(730,100)');
var firstsHighlightedLine = svgContainer.append("path")
                            .attr("d", lineFunction(firstsHighlighted))
                            .attr("stroke", "#0048D0")
                            .attr("stroke-width", 3)
                            .attr("fill", "none")
                            .attr("id", "firstsLine")
                            .attr('transform','rotate(0) translate(730,100)');

svgContainer.append("text")
    .attr("x", 80)
    .attr("y", 180)
    .attr("class", "stats-bold")
    .text("'02");

svgContainer.append("text")
    .attr("x", 100)
    .attr("y", 200)
    .attr("class", "stats-regular")
    .text("founded");

svgContainer.append("text")
    .attr("x", 265)
    .attr("y", 130)
    .attr("class", "stats-bold")
    .text("50");

svgContainer.append("text")
    .attr("x", 250)
    .attr("y", 150)
    .attr("class", "stats-regular")
    .text("team members");

svgContainer.append("text")
    .attr("x", 475)
    .attr("y", 180)
    .attr("class", "stats-bold")
    .text("7");

svgContainer.append("text")
    .attr("x", 460)
    .attr("y", 200)
    .attr("class", "stats-regular")
    .text("subteams");

svgContainer.append("text")
    .attr("x", 650)
    .attr("y", 120)
    .attr("class", "stats-bold")
    .text("15");

svgContainer.append("text")
    .attr("x", 643)
    .attr("y", 140)
    .attr("class", "stats-regular")
    .text("years of flight");

svgContainer.append("text")
    .attr("x", 835)
    .attr("y", 180)
    .attr("class", "stats-bold")
    .text("4");

svgContainer.append("text")
    .attr("x", 803)
    .attr("y", 200)
    .attr("class", "stats-regular")
    .text("firsts in mission");