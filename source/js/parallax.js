module.exports = $(function () {
  $(document).on('mousemove', function (e) {
    let initialX = (window.innerWidth / 2) - e.pageX;
    let initialY = (window.innerHeight / 2) - e.pageY;
    const layer = $('.parallax__layer');
    let divider = 1 / 100;
    let positionX = initialX * divider;
    let positionY = initialY * divider;
    let bottomPosition = (window.innerHeight / 2) * divider;
    const image = $('.parallax__image');
    let stringPosition = 'translate(' + positionX + 'px, ' + positionY + 'px)';

    layer.css('transform', stringPosition);
    image.css('bottom', '-' + bottomPosition + 'px');
  });
});