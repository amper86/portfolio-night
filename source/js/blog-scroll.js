module.exports = $(function () {
  $(window).on('scroll', function() {
    const aside = $('.blog__aside');
    const sectionBlog = $('.blog');
    const $window = $(window);
    //const content = $('.blog__content');

    if($window.scrollTop() >= sectionBlog.offset().top) {
      aside.addClass('blog__aside_fixed');
    }else{
      aside.removeClass('blog__aside_fixed');
    }


    $('.article-list__item').each(function () {
      let textElem = $(this);

      if($window.scrollTop() >= textElem.offset().top - 200 && $window.scrollTop() <= textElem.offset().top + textElem.height()) {
        let attrElem = textElem.attr('data-text');
        let menuElem = $('[data-item=' + attrElem + ']');

        $('.article-titles__item').removeClass('article-titles__item_active');
        menuElem.addClass('article-titles__item_active');
      }
    });
  });
});