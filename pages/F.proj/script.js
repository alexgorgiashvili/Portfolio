
//  Change language
$(".lang-item").click(function (e) { 
    e.preventDefault();
    let datatxt = $(this).attr("data-text")
    $(".lang-main").text(datatxt) ;
    
});

// Currency

$(".gel-item").click(function (e) { 
    e.preventDefault();
    let text = $(this).text();
    $(".gel-value").text(text)
    
});

// Search Hide Btn

$(".main-search").click(function (e) { 
    e.preventDefault();
    let that = $(this)
    $(".overflow-srch").slideToggle(300)
    if(that.hasClass("bi-x-lg")){
        that.removeClass("bi-x-lg").addClass("bi-search")
    }else{
        that.removeClass("bi-search").addClass("bi-x-lg")
    }
    
});

//  Sign in Form
$(".change-form-btn1 , .more-sign-click").click(function (e) { 
  e.preventDefault();
   $(".pos-form-1").animate({"right" : "100%"},100)
   $(".pos-form-2").animate({"left" : "0"},100)
   $(".sign-form-main").animate({"height": "260px"},100)
   $(".forget-pass").hide()
   $(".faded-p").hide()
  
});

$(".change-form-btn").click(function (e) { 
  e.preventDefault();
   $(".pos-form-1").animate({"right" : "0%"},100)
   $(".pos-form-2").animate({"left" : "100%"},100)
   $(".sign-form-main").animate({"height": "230px"},100)
   $(".forget-pass").fadeIn(800)
   $(".faded-p").fadeIn(800)
  
});


$(".sign-btn").click(function (e) { 
  e.preventDefault();
  $(".fade-main-form").fadeIn(300).addClass("sign-cont-effects")
  
});
$(".sign-x-icon").click(function (e) { 
  e.preventDefault();
  $(".fade-main-form").hide().removeClass("sign-cont-effects")
  
});





//  SWipers


var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    freeMode: false,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }, 
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
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
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }, 
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      }, 
      995: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 2,  
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
       
      }, 
       
      1000: {
        slidesPerView: 2,
        spaceBetween: 30,
        
      },
    },
    
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },

  });
    

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      455: {
        slidesPerView: 2,
        spaceBetween: 20,
      }, 
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },  
      945: {
        slidesPerView: 4,
        spaceBetween: 20,
      },  
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },  
  });

  var swiper = new Swiper(".mySwiper7", {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      455: {
        slidesPerView: 2,
        spaceBetween: 20,
      }, 
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },  
      945: {
        slidesPerView: 4,
        spaceBetween: 20,
      },  
      1400: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
  });

  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup:1 ,
      }, 
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },  
      1000: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },  
  });

  // 



    // COUNTDOWN
  let DueDate = new Date("Oct 30, 2021 15:55:25").getTime();
  let update = setInterval(function() {
    let NowDate = new Date().getTime();
    let timeleft = DueDate - NowDate;
    // calculation
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
    document.getElementById("dd").innerHTML = days;
    document.getElementById("hh").innerHTML = hours;
    document.getElementById("mm").innerHTML = minutes;
    document.getElementById("ss").innerHTML = seconds;
  }, 1000 );


      //  Categories page

//  range slider 

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 10000,
  from: 3000,
  to: 7000,
  grid: true
});


$(".listgrid-icon1").on("click", function() {
    $(".cat-cols").removeClass("col-lg-12");
    $(".cat-inncols").removeClass("col-lg-4");
    $(".cat-row").removeClass("flex-lg-column");  
})

$(".listgrid-icon2").on("click", function() {
  $(".cat-cols").addClass("col-lg-12");
  $(".cat-inncols").addClass("col-lg-4");
  $(".cat-row").addClass("flex-lg-column");
})

$(".filter-hide").on("click", function() {
    $(".cat-mcol").toggleClass("filter-toggle"),
    $(".filter-main").css("background-color" , "white")
})



        //  Items Page
 
  // Swiper

  var swiper = new Swiper(".mySwiper8", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper9", {
    loop: false,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
  });
  
  let x = 0
  let counter = $(".count-inp").val(x)

  $(".count-dash").click(function (e) { 
    e.preventDefault();
    if(x > 0){
      let counter = $(".count-inp").val(--x)
    }
  });
  $(".count-plus").click(function (e) { 
    e.preventDefault();
    let counter = $(".count-inp").val(++x)

  });



  // Smartphone  page 


  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
  });

 
  let price = $(".capdiv").attr("data-price")
  let redphone = $(".circlediv").eq(4).attr("data-img")
  

  $(".circlediv").on("click", function(){
    let img = $(this).attr("data-img")
     
    
    
    $(".phimg").attr("src",img)
    let mimg = $(".phimg").attr("src") 
    $(".circlediv").removeClass("pricebor")
    $(this).addClass("pricebor") 
    if(price == "$749.00" && redphone == mimg ){
        
      $(".pricep").children().eq(0).addClass("line ")
      $(".hiddenspan").removeClass("d-none")
      
  }else{
    $(".pricep").children().eq(0).removeClass("line ")
    $(".hiddenspan").addClass("d-none")
  } 
  
  console.log( redphone == mimg )


  })
 

  $(".capdiv").on("click", function(){
    let price = $(this).attr("data-price")
    let mimg = $(".phimg").attr("src")
    
    $(".pricep").children().eq(0).text(price)
    $(".capdiv").removeClass("pricebor")
    $(this).addClass("pricebor")
    if(price == "$799.00"){
        $(".clrdiv:last-child").addClass("disable")
        $(".xx-green").removeClass("d-none")

    }else{
        $(".clrdiv:last-child").removeClass("disable")
        $(".xx-green").addClass("d-none")
    }
    if( redphone == mimg && price == "$749.00"){
        
        $(".pricep").children().eq(0).addClass("line ")
        $(".hiddenspan").removeClass("d-none")
        
    }else{
      $(".pricep").children().eq(0).removeClass("line ")
      $(".hiddenspan").addClass("d-none")
    }       
  
  })
  $(".cardiv").click(function (e) { 
    e.preventDefault();
    $(".cardiv").removeClass("pricebor")
    $(this).addClass("pricebor")
    
  });