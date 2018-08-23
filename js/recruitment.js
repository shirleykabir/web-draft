d3.csv("./data/faq.csv", function(data) {
    data.forEach(function(item){
        if(item.question!="") {
            $("#faq").append("<div class='question'><button class='expand'>" + item.question + "</button><div class='answer'><p>" + item.answer + "</p></div></div>");
        }
    });
});