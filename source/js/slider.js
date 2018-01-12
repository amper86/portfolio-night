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

  //console.log(data[0].name);


  let moveSlide = function (container, direction) {
    //console.log(container);
    let items = $('.slider-nav__item', container);
    let activeItem = items.filter('.slider-nav__item_active');
    //console.log(items);
    /* console.log('test');
    console.log(counterLeft);
    console.log(counterRight);*/

    //if(counter >= items.length) counter = 0;
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


    /*console.log('test2');
    console.log(counterLeft);
    console.log(counterRight);*/


    let reqItemLeft = items.eq(counterLeft);
    let reqItemRight = items.eq(counterRight);

    /*console.log('test3');
    console.log(reqItemLeft);
    console.log(reqItemRight);*/

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

  let changePicture = function (list) {

    let activeCurrent = $('.slider-nav__item_active', list);
    let srcImg = activeCurrent.find('.slider-nav__img').attr('src');
    $('.slider-img__picture').attr('src', srcImg);

  };

  let fillInfo = function (direction) {
    let items = $('.slider-nav__item', '.slider-nav__list_left');
    let numberData = 1;

    //console.log('click ' + direction);
    //console.log(numberData + '-numberData ' + counterLeft + '-left ' + counterRight + '-right начало');
    /*console.log(numberData);
    console.log(counterLeft + ' left');
    console.log(counterRight + ' right');*/

    if(direction === 'down') {
      numberData = counterLeft + 1;
    }else if (direction === 'up') {
      numberData = counterRight - 1;
    }

    //console.log(numberData + '-numberData ' + counterLeft + '-left ' + counterRight + '-right после изменения numberData и перед её валидацией');
    //console.log(counterLeft + ' left');
    //console.log(counterRight + ' right');

    if(numberData >= items.length) {
      numberData = 0;
    } else if (numberData < 0) {
      numberData = items.length - 1;
    }

    //console.log(numberData + '-numberData ' + counterLeft + '-left ' + counterRight + '-right перед добавлением текста');
    /*console.log(numberData);
    console.log(counterLeft + ' left');
    console.log(counterRight + ' right');*/

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
          changePicture(leftList);
          fillInfo('down');
        }


        counterLeft--;
        counterRight--;
        //counter++;
      });

      $('.slider-nav__btn_right').on('click', function (e) {
        e.preventDefault();

        if(!inProcess) {
          inProcess = true;
          moveSlide(leftList, 'down');
          moveSlide(rightList, 'up');
          changePicture(rightList);
          fillInfo('up');
        }


        counterLeft++;
        counterRight++;
        //counter++;
      });

      fillInfo();
    },
  };
}());

$(function () {
  slider.init();
});
