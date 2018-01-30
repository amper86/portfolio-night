module.exports = $(function () {
  $('.header__arrow').on('click', function (e) {
    e.preventDefault();

    let headerHeight = $('.header').height();
    $('html, body').animate({'scrollTop': headerHeight}, 400, 'swing');
  });

  $('.about-me__arrow-link').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({'scrollTop': '0'}, 400, 'swing');
  });
});