$(window).on('scroll', function () {
    if ($(window).scrollTop() > 280) {
      $('.features__graphic_svg').addClass('features__graphic_animated');
    } else {
      $('.features__graphic_svg').removeClass('features__graphic_animated');
    }
  });