module.exports = $(function () {
  $('.header__arrow').on('click', function (e) {
    e.preventDefault();

    let headerHeight = $('.header').height();
    $('html').animate({'scrollTop': headerHeight}, 300, 'swing');
  });

  $('.about-me__arrow-link').on('click', function (e) {
    e.preventDefault();

    $('html').animate({'scrollTop': '0'}, 300, 'swing');
  });
});