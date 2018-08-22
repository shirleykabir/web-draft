d3.csv("../data/aircraft.csv", function(data) {
    data.slice(1).forEach(function(aircraft){
        $("#previous-aircraft .container").append("<center><img src='static/aircraft/" + aircraft["img-src"] + "'></center><br><div class='row'><div class='col-4'><div class='row small-data'><div class='col-4 key'>Year</div><div class='col-8 value'>" + aircraft.year + "</div></div><div class='row small-data'><div class='col-4 key'>Size</div><div class='col-8 value'>" + aircraft.wingspan + "</div></div><div class='row small-data'><div class='col-4 key'>Weight</div><div class='col-8 value'>" + aircraft.weight + "</div></div><div class='row small-data'><div class='col-4 key'>Placings</div><div class='col-8 value'>" + aircraft.overall + " overall<br>" + aircraft.mission + " mission<br>" + aircraft.frr + " flight readiness review<br>"+ aircraft["journal-paper"] + " journal paper</div></div></div><div class='col-8'><h4>" + aircraft.name + "</h4><p>" + aircraft.description + "</p></div></div><div class='aircraft-external-links'><div class='row'><div class='col-5'><a href='" + aircraft["journal-paper"] + "' class='journal-paper'>Read the Journal Paper<b>➜</b></a></div><div class='col-7'><a href='" + aircraft["frr-link"] + "' class='frr'>Watch the Flight Readiness Review<b>➜</b></a></div></div></div>");
    });
});


