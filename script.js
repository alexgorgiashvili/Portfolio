// $(".nav-text").mouseover(function(){
//     $(this).next().animate({
//         "width": "100%"
//     });
//     console.log($(this).next())
//   });
//   $(".nav-text").mouseover(function(){
//     $(this).next().animate({
//         "width": "100%"
//     });
//     console.log($(this).next())
//   });
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
    $(this).children().children().fadeIn(500)
},
    function() {
        $(this).children().children().hide(100)
        
    });

