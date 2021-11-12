$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,  
        fade: true,
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.car__slider').slick({
      arrows: true,
      dots: true,
      varibleWidth:true,
    })
});