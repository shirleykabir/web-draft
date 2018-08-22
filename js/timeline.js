// 10/15/2018 12:00:00AM
var svg = d3.select("#timeline")
    .append("svg")
    .attr("width", 900)
    .attr("height", 200)
    .attr("id", "r-timeline");

var parseTime = d3.timeParse("%m/%d/%Y %I:%M:%S%p");
var formatTime = d3.timeFormat("%b %d");

function isRange(start, end) {
    var s = parseTime(start);
    var e = parseTime(end);
    if(s.getDate()!=e.getDate()) {
        return true;
    }
    else {
        return false;
    }
}

function getDateRange(start, end) {
    // Longer time interval
    var s = parseTime(start);
    var e = parseTime(end);
    if(s.getDate()!=e.getDate()) {
        return d3.timeFormat("%b %d")(s) + "-" + d3.timeFormat("%d")(e);
    }
    else {
        return d3.timeFormat("%b %d")(s) + " " + d3.timeFormat("%I:%M")(s) + "-" + d3.timeFormat("%I:%M %p")(e);
    }
}

var timelineData = [];

d3.csv("../data/rec-timeline.csv", function (timelineData) {
    var timeExtent = d3.extent(timelineData, function (d) {
        return parseTime(d.start);
    });

    var timeScale = d3.scaleLog()
        .domain(timeExtent)
        .range([0, 800]);

    svg.append("line")
        .attr("x1", 0)
        .attr("x2", 900)
        .attr("y1", 100)
        .attr("y2", 100)
        .style("stroke", "#ddd")
        .style("stroke-width", "3");
    for (var j = 0; j < timelineData.length; j++) {
        var e = timelineData[j];
        if (e.start != "") {
            if (j % 2 == 0) {
                if(!isRange(e.start, e.end)) {
                    svg.append("circle")
                    .attr("cx", timeScale(parseTime(e.start)) + 40)
                    .attr("cy", 100)
                    .attr("r", 8)
                    .style("fill", "#fff")
                    .style("stroke", "#E22828")
                    .style("stroke-width", "3");
                }
                else {
                    svg.append("rect")
                    .attr("x", timeScale(parseTime(e.start)) + 30)
                    .attr("y", 100-8)
                    .attr("width", (timeScale(parseTime(e.end)) - timeScale(parseTime(e.start))) + 30)
                    .attr("height", 16)
                    .attr("rx", 8)
                    .attr("ry", 8)
                    .style("fill", "#fff")
                    .style("stroke", "#E22828")
                    .style("stroke-width", "3");
                }
                svg.append("line")
                    .attr("x1", timeScale(parseTime(e.start)) + 40)
                    .attr("x2", timeScale(parseTime(e.start)) + 40)
                    .attr("y1", 108)
                    .attr("y2", 180)
                    .style("stroke", "#E22828")
                    .style("stroke-width", "1");
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 130)
                    .attr("font-size", 8)
                    .attr("fill", "#aaa")
                    .text(getDateRange(e.start, e.end));
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 138)
                    .attr("font-size", 8)
                    .attr("fill", "#ccc")
                    .text(e.location);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 148)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line1);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 158)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line2);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 168)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line3);
            } else {
                if(!isRange(e.start, e.end)) {
                    svg.append("circle")
                    .attr("cx", timeScale(parseTime(e.start)) + 40)
                    .attr("cy", 100)
                    .attr("r", 8)
                    .style("fill", "#fff")
                    .style("stroke", "#E22828")
                    .style("stroke-width", "3");
                }
                else {
                    svg.append("rect")
                    .attr("x", timeScale(parseTime(e.start)) + 40)
                    .attr("y", 100)
                    .attr("width", 40)
                    .attr("height", 8)
                    .attr("rx", 10)
                    .attr("ry", 10)
                    .style("fill", "#fff")
                    .style("stroke", "#E22828")
                    .style("stroke-width", "3");
                }
                svg.append("line")
                    .attr("x1", timeScale(parseTime(e.start)) + 40)
                    .attr("x2", timeScale(parseTime(e.start)) + 40)
                    .attr("y1", 20)
                    .attr("y2", 92)
                    .style("stroke", "#E22828")
                    .style("stroke-width", "1");

                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 32)
                    .attr("font-size", 8)
                    .attr("fill", "#aaa")
                    .text(getDateRange(e.start, e.end));
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 40)
                    .attr("font-size", 8)
                    .attr("fill", "#ccc")
                    .text(e.location);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 50)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line1);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 60)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line2);
                svg.append("text")
                    .attr("x", timeScale(parseTime(e.start)) + 45)
                    .attr("y", 70)
                    .attr("font-size", 10)
                    .attr("fill", "#000")
                    .text(e.line3);
            }
        }
    }

});