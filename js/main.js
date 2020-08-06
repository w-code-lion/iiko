
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

////////////////////////////////////////

  // кнопка вверх
    $(function() {
        $('.top').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });    


/////////////////////////////////////////////

// Header Fixed

     var options = {
        offset: 20
     }

      var header = new Headhesive('.header__panel', options);


/////////////////////////////////////////////

  // BurgerMenu

  const menuToggle = document.querySelector('#menu__togle');
  const mobileNavContainer = document.querySelector('#mobile__nav');

  menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
  }   

    $('.mobile__link-close').click(function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
  });  

});

/////////////////////////////////////////////////

$(document).ready(function(){

  // Header slickSlider

  $('.header__carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    arrows: false,
    dots: true
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
          
      }
    },


     {
      breakpoint: 425,
      settings: {
          slidesToShow: 2,
           arrows: false,
          
      }
    }

    ]

  });

 ////////////////////////////////////

 $('.block__services-mobile').slick({
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
    }
   ]  

  });


});

////////////////////////////////////////

// Animate number

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
                 duration: 3500,
            });

            show = false;     
        }
    });

});

///////////////////////////////////////////

// Tab

$(document).ready(function(){
      $(".tab_item").not(":first").hide();
$(".prices__block-products .tab").click(function() {
  $(".prices__block-products .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-tab");

});

////////////////////////////////////////////

// Accordion
$(document).ready(function(){

    
  $('.beefup').beefup({
    openSingle: true,
  });


  $(".owl-price").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000

  });


});

////////////////////////////////////////////////

 // Modal Window
    $(document).ready(function() {
        var overlay = $('.modal__overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .modal__overlay');
        var modal = $('.modal');

         open_modal.click( function(event){
             event.preventDefault();
             var div = $(this).attr('href');
             var title = $(this).attr('data-title');
             var desc = $(this).attr('data-desc');
             $('.modal__title--target').empty();
             $('.modal__desc--target').empty();
             $('.modal__title--target').append(title);
             $('.modal__desc--target').append(desc);
             overlay.fadeIn(100,
                 function(){
                     $(div)
                         .css('display', 'block')
                         .animate({opacity: 1}, 100);
             });
         });

         close.click( function(){
                var modal = $(this).parents('.modal');
                modal
                 .animate({opacity: 0}, 100,
                     function(){
                         $(this).css('display', 'none',);
                         overlay.fadeOut(100);
                     }
                 );
         });




});


$(document).ready(function() {
  $('select').niceSelect();
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});









