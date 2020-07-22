
/////////////////////////////////////////

$(document).ready(function(){
  $('.header__carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    arrows: false,
    dots: true,
    vertical: true
  });
});

//////////////////////////////////////////

$(document).ready(function(){
  $('.header__bottom-brends').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: true,
    dots: false,
    infinite: true,
  slidesToShow: 1,
  variableWidth: true
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

//////////////////////////////////////////

$(document).ready(function(){

     var options = {
        offset: 20
     }
      

      var header = new Headhesive('.header__panel', options);

       $('.popup-link').magnificPopup({});
      

});
