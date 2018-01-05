module.exports = $(function () {

  function magicBlur() {
    const background = document.querySelector('.about-me');
    const container = document.querySelector('.about-me__form');
    const blur = document.querySelector('.about-me__form-blure');

    const style = blur.style;

    const test = background.offsetTop;

    const backgroundWidth = background.offsetWidth;
    const backgroundHeight = background.offsetHeight;
    const positionContainerL = container.offsetLeft;
    const positionContainerT = container.offsetTop;

    const test2 = positionContainerT - test;

    style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;
    style.backgroundPosition = `-${positionContainerL}px -${test2}px`;

    /*console.log('@@',backgroundWidth,backgroundHeight,positionContainerL,positionContainerT);*/
  }
  //todo: для нормального изображения нужно попробовать с img фон секции или на маленьких экранах убрать блур

  $(window).on('resize', function () {
    //console.log('hello resize');
    magicBlur();
  });

  magicBlur();
});