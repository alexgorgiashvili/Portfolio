
$(".nav-text").hover(function() { 
    $(this).next().stop(true).animate({
        "width": "100%"
    });},
    function() { 
        $(this).next().stop(true).animate({
        "width": "0%"
    },150);});


$(".myprojects").hover(
    function (){
    $(this).children().fadeIn(500)
},
    function() {
        $(this).children().hide(100)
        
    });

