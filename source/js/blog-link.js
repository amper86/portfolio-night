module.exports = $(function () {

  $('.article-titles__link').on('click', function (e) {
    e.preventDefault();

    let menuItem = $(this).parent();
    let menuAttr = menuItem.attr('data-item');
    let textItem = $('[data-text=' + menuAttr + ']');
    let textItemOffset = textItem.offset().top;

    //console.log(textItemOffset);
    //$(document).off('scroll');

    $('.article-titles__item').removeClass('article-titles__item_active');
    menuItem.addClass('article-titles__item_active');

    //$(window).scrollTop(textItemOffset);
    //console.log(textItem.scrollTop(textItemOffset));
    //window.scrollTo(0, textItemOffset);
    $('html').stop().animate({'scrollTop': textItemOffset}, 300, 'swing');
  });
});