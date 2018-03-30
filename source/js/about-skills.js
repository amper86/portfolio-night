module.exports= $(function () {
  $(window).on('scroll', function () {

    const $window = $(window);
    const rightContent = $('.about__right-content');

    if($window.scrollTop() >= rightContent.offset().top - 100 && $window.scrollTop() <= rightContent.offset().top + rightContent.height()) {
      //console.log('hello');
      //$('.skills-row__icon-level').css('stroke-dasharray', '141.3 282.6');
      $('.skills-row__circle').each(function () {
        //console.log($(this).attr('data-skill'));
        let skillNumber = $(this).attr('data-skill');
        let dasharrayNumber = (282.6 / 100 * skillNumber);
        let skillIcon = $(this).find('.skills-row__icon-level');
        //console.log(skillIcon);
        skillIcon.css('stroke-dasharray', dasharrayNumber + ' 282.6');
      });
    }
  });
});