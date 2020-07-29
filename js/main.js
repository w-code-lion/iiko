$(document).ready(function(){

     var options = {
        offset: 20
     }
      

      var header = new Headhesive('.header__panel', options);

       $('.popup-link').magnificPopup({});


  // BurgerMenu

  const menuToggle = document.querySelector('#menu__togle');
  const mobileNavContainer = document.querySelector('#mobile__nav');

  menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
  }
  
      

});

/////////////////////////////////////////////////

$(document).ready(function(){

  // Header slickSlider

  $('.header__carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    arrows: false,
    dots: true,
    vertical: true
  });

///////////////////////////////////////

 $('.header__bottom-brends').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: true,
    dots: false,
    infinite: true,
  slidesToShow: 1,
  variableWidth: true,

   responsive: [
    {
      breakpoint: 590,
      settings: {
        arrows: false,
          variableWidth: false,
          slidesToShow: 2
      }
    },


     {
      breakpoint: 425,
      settings: {
          slidesToShow: 1,
           arrows: false,
          variableWidth: false,
          
      }
    }

    ]

  });

 ////////////////////////////////////

 $('.company__carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: true,
    dots: false,
    infinite: true,
  slidesToShow: 1,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',
  });


});

/////////////////////////////////////////

$(document).ready(function(){
  $('.popup-link').magnificPopup({});

});
////////////////////////////////////////
$(document).ready(function(){

    var show = true;
    $(window).on("scroll", function(){
   
        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(".about").offset().top;

        console.log(w_top + 100 + " " + e_top);

        if(w_top + 100 >= e_top){
                 $(".number").spincrement({
                 thousandSeparator: "",
                 duration: 3500
            });

            show = false;     
        }
    });

});

///////////////////////////////////////////

$(document).ready(function(){
      $(".tab_item").not(":first").hide();
$(".prices__block-products .tab").click(function() {
  $(".prices__block-products .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");

});

////////////////////////////////////////////

$(document).ready(function(){

    
        $('.beefup').beefup({
          openSingle: true,
        });

    

});