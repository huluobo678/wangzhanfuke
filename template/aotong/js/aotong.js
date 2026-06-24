$(function () {
  $('.nav-toggle').on('click', function () {
    $('.site-head').toggleClass('nav-open');
  });
  $('.t1-items img').on('mouseenter click', function () {
    $('.main-product-img').attr('src', $(this).attr('src'));
    $('.t1-items p').removeClass('t1-current');
    $(this).closest('p').addClass('t1-current');
  });
  $('.my-kefu-ftop a').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 300);
  });
});
