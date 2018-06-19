function api_call(input) {
    $.ajax({
//        url: "http://0.0.0.0:5000/importantWords?url=http://www.fullychargedshow.co.uk/electric-cars/coal-is-king",
        url: "http://0.0.0.0:5000/importantWords?url=" + input,
//        url: "https://tf-idf.herokuapp.com/importantWords?url=" + input + "&top=15",
        method: 'GET'
    }).done(function(data) {
        console.log(data);
    });
    
};

$(document).ready(function() {
    // request when clicking on the button
    $('#submit').click(function() {
        var input = $("#search").val();
        api_call(input);
    });
});

