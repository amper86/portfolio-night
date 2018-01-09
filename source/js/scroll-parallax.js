module.exports = $(function () {
  $(window).on('scroll', function () {
    const $header = $('.header');
    const $window = $(window);
    const $headerBg = $('.header__bg');

    /*console.log('test');
    console.log($window.scrollTop() + ' scrollTop');
    console.log($header.height() + ' header');*/


    if($window.scrollTop() <= $header.height()) {

      /*console.log('hi');
      console.log($window.scrollTop() + ' scrollTop');
      console.log($header.height() + ' header');*/

      let windowScroll = - ($window.scrollTop() / $header.height() * 100) / 10;
      console.log(windowScroll);
      $headerBg.css('transform', 'translate3d(0, ' + windowScroll + '%, 0)');
    }
  });
});