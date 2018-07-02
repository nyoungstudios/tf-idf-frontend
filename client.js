//test url = http://www.fullychargedshow.co.uk/electric-cars/coal-is-king

function api_call(input) {
    $.ajax({
        url: "http://0.0.0.0:5000/importantWords?url=http://www.fullychargedshow.co.uk/electric-cars/coal-is-king&top=15",
//        url: "https://tf-idf.herokuapp.com/importantWords?url=" + input + "&top=15",
        method: 'GET'
    }).done(function(data) {
        console.log(data);
        var value = JSON.parse(data);
        for (x in value) {
            console.log(value[x]);
            console.log(value[x][0]);
            console.log(value[x][1]);
            var num = parseInt(x) + 1;
            $('.points').append('<h2 id="result" style="margin-top: 15px">' + num + ': ' + value[x][0] + '</h2>');
        }
    });
    
};

$(document).ready(function() {
    // request when clicking on the button
    $('#submit').click(function() {
        var input = $("#search").val();
        api_call(input);
    });
});

