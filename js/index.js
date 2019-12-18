$(document).ready(function () {
  $('.con_carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });

  let i=0;
  $('#hamberger').click(function (){
    i++;
    if(i==1)
      $('.menu').toggleClass('menu_active');
    else{
      $('.menu').removeClass('menu_active');
      i=0
    }
  })
})