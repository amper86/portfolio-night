module.exports = $(function () {
  $('.btn-autorization').on('click', function(e) {
    e.preventDefault();

    //$('.greeting-container').css('transform', 'rotateY(180deg)');
    $('.greeting-container').addClass('greeting-container_flip');
    $(this).animate({opacity: 0.0}, 500, function () {
      $(this).css('display', 'none');
    });

  });

  $('.form__nav-btn[type="button"]').on('click', function (e) {
    e.preventDefault();

    //$('.greeting-container').css('transform', 'rotateY(0)');
    $('.greeting-container').removeClass('greeting-container_flip');
    $('.btn-autorization').css('display', 'block').animate({opacity: 1.0}, 500);


  });
});