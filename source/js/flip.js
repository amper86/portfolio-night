module.exports = $(function () {
  $('.btn-autorization').on('click', function(e) {
    e.preventDefault();

    $('.greeting-container').css('transform', 'rotateY(180deg)');
    $(this).animate({opacity: 0.0}, 500, function () {
      $(this).css('display', 'none');
    });

    console.log('test');
  });

  $('.form__nav-btn').on('click', function (e) {
    e.preventDefault();

    $('.greeting-container').css('transform', 'rotateY(0)');
    $('.btn-autorization').css('display', 'block').animate({opacity: 1.0}, 500);


  });
});