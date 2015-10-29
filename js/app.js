$(document).ready(function() {
  addHRs()

  // navigation slider
  var nav = $('.topnav');

  nav.find('li').each(function() {
    if ($(this).find('ul').length > 0) {
      $(this).mouseover(function() {
        $(this).find('ul').slideDown(300);
      });

      $(this).mouseleave(function() {
        $(this).removeClass('active').find('ul').stop(true).slideUp(300);
      });
    }
  });
  // end navigation slider

  $('.nav > ul > li > a').hover(function() {
    if (!$(this).hasClass('green-underline')) {
      $(this).addClass('green-underline');
    }
  },
  function() {
    if ($('.nav').find('.green-underline').length >= 2) {
      $(this).removeClass('green-underline');
    }
  });

  // fix navigation to top
  $(window).scroll(function() {
      if ($(window).scrollTop() > 150) {
          $('#navigation').addClass('stuck');
      } else {
          $('#navigation').removeClass('stuck');
      }
  });

  // latest properties
  $('.latest-properties-list ul.menu li a').hover(function() {
    if (!$(this).hasClass('green-underline')) {
      $(this).addClass('green-underline');
    }
  },
  function() {
    if ($('.latest-properties-list').find('.green-underline').length >= 2) {
      $(this).removeClass('green-underline');
    }
  });

  // photo inner icons

  $('.nvr-prop-img').hover(function() {
    $(this).find('.inner-icons').fadeIn(500);
  },
  function() {
    $(this).find('.inner-icons').fadeOut(500);
  });

  // end latest properties

  function addHRs() {
    $('ul.topnav li ul.subnav li a').prepend('<hr />');
    $('ul.topnav li:nth-child(2) ul.subnav li a').append('<hr />');
    $('ul.topnav li:nth-child(4) ul.subnav li:nth-child(3) a').append('<hr />');
    $('ul.topnav li:nth-child(5) ul.subnav li:nth-child(1) a').append('<hr />');
    $('ul.topnav li:nth-child(6) ul.subnav li:nth-child(4) a').append('<hr />');

    $('.skyline p:nth-of-type(1)').prepend('<hr />');
    $('.skyline p:nth-of-type(2)').append('<hr />');
  }

  // carousel
  $('.bxslider').bxSlider({
      autoControls: true,
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 10,
      captions: true,
    });
}());
