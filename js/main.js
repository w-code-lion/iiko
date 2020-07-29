
$(document).ready(function(){

   (function($){
      $(window).on("load",function(){
        
        /* Page Scroll to id fn call */
        $("#menu a,a[href='#top'],a[rel='m_PageScroll2id'], .top").mPageScroll2id({
          layout:"auto",
          offset:10,
          highlightSelector:"#menu a"
        });
        
        /* demo functions */
        $("a[rel='next']").click(function(e){
          e.preventDefault();
          var to=$(this).parent().parent("section").next().attr("id");
          $.mPageScroll2id("scrollTo",to);
        });
        
      });
    })(jQuery);


/////////////////////////////////////////////

     var options = {
        offset: 20
     }
      

      var header = new Headhesive('.header__panel', options);

       $('.popup-link').magnificPopup({});

/////////////////////////////////////////////

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

 $('.block__services-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,
    infinite: true,
  slidesToShow: 2,
   dotsClass: 'slick-dots slider__dots',
     responsive: [
    {
      breakpoint: 590,
      settings: {
          slidesToShow: 1,
   dotsClass: 'slick-dots slider__dots',

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

 /////////////////////////////////////


 $('.block__advantage-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,
    infinite: true,
  slidesToShow: 1,
   dotsClass: 'slick-dots slider__dots-advantage',
     responsive: [
    {
      breakpoint: 590,
      settings: {
   dotsClass: 'slick-dots slider__dots-advantage',

      }
    }
   ]  

  });


 $('.prices__carousel-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,
    infinite: true,
  slidesToShow: 1,
   dotsClass: 'slick-dots slider__dots-prices',
     responsive: [
    {
      breakpoint: 590,
      settings: {
   dotsClass: 'slick-dots slider__dots-prices',

      }
    }
   ]  

  });

 ///////////////////////////////////////

  $('.questions__accordion-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,
    infinite: true,
  slidesToShow: 1,
   dotsClass: 'slick-dots slider__dots-accordion',
     responsive: [
    {
      breakpoint: 590,
      settings: {
   dotsClass: 'slick-dots slider__dots-accordion',

      }
    },
   ]  

  });

///////////////////////////////////////////////////

  $('.block__partners-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: false,
    infinite: true,
  slidesToShow: 4,
     responsive: [
    {
      breakpoint: 650,
      settings: {
       
        slidesToShow: 3,
      }
    },

     {
      breakpoint: 510,
      settings: {
       
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 360,
      settings: {
       
        slidesToShow: 1,
      }
    }
   ]  

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