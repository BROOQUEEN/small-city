$(function(){
  $('.personal__lists').slick({
      dots: true,
      prevArrow: '<img src="/images/icons/arrow-left.svg" alt="">',
      nextArrow: '<img src="/images/icons/arrow-right.svg" alt="">',
      infinite: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
});

$(function(){
  $('.comments__comments').slick({
      dots: true,
      prevArrow: '<img src="/images/icons/arrow-left.svg" alt="">',
      nextArrow: '<img src="/images/icons/arrow-right.svg" alt="">',
      infinite: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
});


$(window).resize(function () {
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = $(this).width();

  if (widthWind <= 320) {
     /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
     $(function(){
      $('.personal__lists').slick({
          dots: true,
          prevArrow: '<img src="/images/icons/arrow-left-320.svg" alt="">',
          nextArrow: '<img src="/images/icons/arrow-right-320.svg" alt="">',
          infinite: true,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1
        });
    });
  }
}
);
