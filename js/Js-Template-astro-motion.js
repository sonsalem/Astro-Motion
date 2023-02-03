$('#nav-toggle').click(function(){
  $(this).toggleClass('is-active')
  $('ul.nav').toggleClass('show');
});
$(document).ready(function(){
  $(".shuffle").owlCarousel({
    loop:true,
    items: 1,
    dots:true,
    mouseDrag: false,
    touchDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items:1,
    }
  );
});
$(document).ready(function(){
  $(".gallery").owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
        767:{
            items:4,
        },
        1200:{
            items:5,
        },
      }
    }
  );
})