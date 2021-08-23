
$(document).ready(function () {
    $('ul li .link_new_products').click(function(){
        $('ul li .link_new_products').removeClass("active"); 
        $(this).addClass("active");
    });
    $('.item_navbar').mouseover(function(){
        $('.item_navbar').removeClass("active");
        // Tat ca item_navbar  sẽ remove đi
        $(this).addClass("active");
        // this là những cái chọn sẽ add active vào
        $(".overplay").removeAttr("style").show();
    });
    $('.item_navbar').mouseout(function(){
        $('.item_navbar').removeClass("active");
        $('.item_navbar_first').addClass("active");
        $(".overplay").hide();
    });
    $('.link_products_phone').mouseover(function(){
        $('.link_products_phone').removeClass("active");
        $(this).addClass("active");
        // $(".overplay").removeAttr("style").show();
    });
    $('.link_filter_price').mouseover(function(){
        $('.link_filter_price').removeClass("active");
        $(this).addClass("active");
        // $(".overplay").removeAttr("style").show();
    });
    $('.link_products_phone').mouseout(function(){
        // $(this).removeClass("active");
        // $('.item_products_phone_first').addClass("active");
        // $(".overplay").hide();
    });
  
 
     $('.slider_img').slick({
        autoplay:true,
        arrows : true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        autoplaySpeed:5000,
      });
      

       $('.wrapper_slider_small_parent').slick({
        autoplay:true,
        dots: true,
        infinite: true,
        autoplaySpeed:5000,
        fade: false,
        cssEase: 'linear',
        arrows : 'false',
        // dotsClass: 'original-dots',
        });
        $('.wrapper_slider_detail').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          autoplay:true,
          asNavFor: '.slide_detail_small',
          autoplaySpeed:5000,
        });
        $('.slide_detail_small').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.wrapper_slider_detail',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          arrows:true,
          nextArrow: $('.detail_arrow'),
          prevArrow: $('.detail_next'),
          autoplaySpeed:5000,
        });
        $('.scroll_top').click(function(){
          $('html,body').animate({
              scrollTop:0
          },2000)
        })
       $('.quick-search-item').select2();


     $('.nav_bar_mobile .icon_bars').click(function() {
        $('.list_navbar').addClass("active");
        $(this).removeClass('active')
        $('.icon_times').addClass('active')
      });
     $('.nav_bar_mobile .icon_times').click(function() {
        $(this).removeClass('active')
        $('.icon_bars').addClass("active");
        $('.list_navbar').removeClass("active");
      });
   
});



