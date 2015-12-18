$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);

    $(".some-button").on('click', function(){
        console.log($(this));
    });
});

function clickyButton(){
    $.ajax({
        type: "GET",
        url: "/kittyFoo",
        success: function(gremlins){
            console.log(gremlins);
        }
    })
}
