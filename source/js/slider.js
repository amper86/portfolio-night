let slider = (function () {
  let counter = 0;
  const duration = 300;
  let inProcess = false;
  let counterLeft = counter - 1;
  let counterRight = counter + 1;
  const leftList = $('.slider-nav__list_left');
  const rightList = $('.slider-nav__list_right');

  const data = [
    {
      name: 'Сайт 1 web-dev',
      description: 'Используемые технологии 1',
      link: '#',
    },
    {
      name: 'Сайт 2 ItLoft',
      description: 'Используемые технологии 2',
      link: '#',
    },
    {
      name: 'Сайт 3 Jquery',
      description: 'Используемые технологии 3',
      link: '#',
    },
    {
      name: 'Сайт 4 Yoga',
      description: 'Используемые технологии 4',
      link: '#',
    },
  ];


  let moveSlide = function (container, direction) {
    let items = $('.slider-nav__item', container);
    let activeItem = items.filter('.slider-nav__item_active');


    if(counterLeft >= items.length) {
      counterLeft = 0;
    } else if (counterLeft < 0) {
      counterLeft = items.length - 1;
    }

    if(counterRight >= items.length) {
      counterRight = 0;
    } else if (counterRight < 0) {
      counterRight = items.length - 1;
    }


    let reqItemLeft = items.eq(counterLeft);
    let reqItemRight = items.eq(counterRight);


    console.log(direction);
    if (direction === 'down') {
      activeItem.animate({
        'top' : '100%',
      }, duration);

      reqItemLeft.animate({
        'top' : '0',
      }, duration, function () {
        activeItem.removeClass('slider-nav__item_active').css('top', '-100%');
        $(this).addClass('slider-nav__item_active');
        inProcess = false;
      });
    }

    if(direction === 'up') {
      activeItem.animate({
        'top' : '-100%',
      }, duration);

      reqItemRight.animate({
        'top' : '0',
      }, duration, function () {
        activeItem.removeClass('slider-nav__item_active').css('top', '100%');
        $(this).addClass('slider-nav__item_active');
        inProcess = false;
      });
    }

  };

  let changePictureAndInfo = function (list) {

    let activeCurrent = $('.slider-nav__item_active', list);
    let srcImg = activeCurrent.find('.slider-nav__img').attr('src');
    let dataValue = activeCurrent.attr('data-order');


    $('.slider-img__picture').attr('src', srcImg);

    $('.block-subtitle_slider').text(data[dataValue].name);
    $('.slider-info__text p span').text(data[dataValue].description);
    $('.slider-info__link').attr('href', data[dataValue].link);

  };

  let startFillInfo = function () {

    let numberData = 1;

    $('.block-subtitle_slider').text(data[numberData].name);
    $('.slider-info__text p span').text(data[numberData].description);
    $('.slider-info__link').attr('href', data[numberData].link);

  };

  return {
    init: function () {
      $('.slider-nav__btn_left').on('click', function (e) {
        e.preventDefault();

        if(!inProcess) {
          inProcess = true;
          moveSlide(leftList, 'down');
          moveSlide(rightList, 'up');
          changePictureAndInfo(leftList);
        }

        counterLeft--;
        counterRight--;
      });

      $('.slider-nav__btn_right').on('click', function (e) {
        e.preventDefault();

        if(!inProcess) {
          inProcess = true;
          moveSlide(leftList, 'down');
          moveSlide(rightList, 'up');
          changePictureAndInfo(rightList);
        }

        counterLeft++;
        counterRight++;
      });

      startFillInfo();
    },
  };
}());

$(function () {
  slider.init();
});