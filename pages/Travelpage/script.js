
// 
$(".checkradio").on("focus" , function(e) {
    e.preventDefault();
    let radiodata = $(this).attr("data-num")
    $(".card").removeClass("classadd")
    $(".middlecard"+radiodata+"").addClass("classadd")
        
        console.log(radiodata)


});

//sWiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }, 
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },  
      990: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

//
  $(".clients").on("focus" , function(e) {
    e.preventDefault();
    let num = $(this).attr("data-num")
    $(".vegas").removeClass("chng-class").addClass("fadevegas");
    $('[data-fd="'+num+'"]').removeClass("fadevegas").addClass("chng-class")
    
});

//save theme change to Storage

$(function(){


    let clrr = localStorage.getItem("clr")
    $("body").css("background-color", clrr,"!important")
    if(clrr == "#46886c"){
        $(".switch-inp").prop("checked", true)
    }

    $(".switch-inp").on("change", function(){
        if($(this).is(":checked")){
            $("body").css("background-color","#46886c","!important")
            $(".head-container").css("opacity","0.6")
            $("footer").removeClass("text-secondary")
            localStorage.setItem("clr","#46886c")
        }else{
            $("body").css("background-color","#f1efef","!important")
            $(".head-container").css("opacity","1")
            $("footer").addClass("text-secondary")
            localStorage.setItem("clr","#f1efef") 
        }
    
    
    
    })
})