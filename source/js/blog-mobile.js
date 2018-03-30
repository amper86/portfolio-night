module.exports = $(function () {
  if($(document).width() <= 768) {
    //console.log($(document).width());
    $('.blog__aside').on('click', function () {
      //console.log('test');
      $(this).toggleClass('blog__aside_mobile');
    });
  }
});