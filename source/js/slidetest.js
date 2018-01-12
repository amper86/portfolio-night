/*
let slider = (function () {
    let counter = 1;
    const duration = 300;
    let inProcess = false;


    let moveSlide = function (container, direction) {
        //console.log(container);
        let items = $('.slider-nav__item', container);
        let activeItem = items.filter('.slider-nav__item_active');
        //console.log(items);

        if(counter >= items.length) counter = 0;

        let reqItem = items.eq(counter);

        if (direction === 'down') {
            activeItem.animate({
                'top' : '100%',
            }, duration);

            reqItem.animate({
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

            reqItem.animate({
                'top' : '0',
            }, duration, function () {
                activeItem.removeClass('slider-nav__item_active').css('top', '100%');
                $(this).addClass('slider-nav__item_active');
                inProcess = false;
            });
        }
    };

    return {
        init: function () {
            $('.slider-nav__btn').on('click', function (e) {
                e.preventDefault();

                if(!inProcess) {
                    inProcess = true;
                    moveSlide($('.slider-nav__list_left'), 'down');
                    moveSlide($('.slider-nav__list_right'), 'up');
                }

                counter++;
            });
        },
    };
}());

$(function () {
    slider.init();
});*/

//----

/*
let slider = (function () {
    let counter = 1;
    const duration = 300;
    let inProcess = false;


    let moveSlide = function (container, direction) {
        //console.log(container);
        let items = $('.slider-nav__item', container);
        let activeItem = items.filter('.slider-nav__item_active');
        //console.log(items);
        let directionTop = direction === 'down' ? 100 : -100;

        if(counter >= items.length) counter = 0;

        let reqItem = items.eq(counter);


        activeItem.animate({
            'top' : directionTop + '%',
        }, duration);

        reqItem.animate({
            'top' : '0',
        }, duration, function () {
            activeItem.removeClass('slider-nav__item_active').css('top', -directionTop + '%');
            $(this).addClass('slider-nav__item_active');
            inProcess = false;
        });

    };

    return {
        init: function () {
            $('.slider-nav__btn').on('click', function (e) {
                e.preventDefault();

                if(!inProcess) {
                    inProcess = true;
                    moveSlide($('.slider-nav__list_left'), 'down');
                    moveSlide($('.slider-nav__list_right'), 'up');
                }

                counter++;
            });
        },
    };
}());

$(function () {
    slider.init();
});
*/
