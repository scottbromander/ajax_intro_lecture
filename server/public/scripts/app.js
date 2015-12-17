$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);
});

function clickyButton(){
    $.ajax({
        type: "GET",
        url: "/kittyFoo",
        success: function(data){
            console.log(data);
        }
    })
}
