
$(document).ready(function () {

  $('.slider').slider();
  $('.dropdown-trigger').dropdown();
  $('.parallax').parallax();


  $('#carousel-novidades').carousel({
    dist: 0,
    shift: 0,
    padding: 80,
    interval: 100,
    numVisible: 4
  });

})

$('.menu-drop-btn').click(function () {

  $('#novidadesNext').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#carousel-novidades').carousel('next');
  });


  $('#novidadesPrev').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#carousel-novidades').carousel('prev');
  });
})

$menuLeft = $('.pushmenu-right');
$nav_list = $('#sidebartoggle');

$nav_list.click(function () {
  $(this).toggleClass('active');
  $('.pushmenu-push').toggleClass('pushmenu-push-toleft');
  $menuLeft.toggleClass('pushmenu-open');

  if ($(this).hasClass('active')) {
    $('#sidebartoggle').html('<i class="fas fa-times menu-search" style="padding-top: 2px"></i>');
  } else {

    $('#sidebartoggle').html('<i class="fas fa-bars menu-search" style="padding-top: 2px"></i>');
  }
});

$(".pushmenu > a").click(function () {
  $nav_list.toggleClass('active');
  $('.pushmenu-push').toggleClass('pushmenu-push-toleft');
  $menuLeft.toggleClass('pushmenu-open');

  if ($(this).hasClass('active')) {
    $('#sidebartoggle').html('<i class="fas fa-times menu-search" style="padding-top: 2px"></i>');
  } else {

    $('#sidebartoggle').html('<i class="fas fa-bars menu-search" style="padding-top: 2px"></i>');
  }
});