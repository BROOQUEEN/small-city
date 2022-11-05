$(function(){
  $('.personal__lists').slick({
      // dots: true,
      prevArrow: '<img src="/images/icons/arrow-left.svg" alt="">',
      nextArrow: '<img src="/images/icons/arrow-right.svg" alt="">',
      infinite: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
});
