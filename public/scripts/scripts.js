$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$('.a1, .a2, .a3').fuwatto({
  duration: 2000,
})
  


  