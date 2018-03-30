module.expots = $(function () {
  function errorStyle(el) {
    el.css('borderColor', '#e44845');
    let label = el.prev('label');
    label.css('color', '#e44845');
  }

  function confirmStyle(el) {
    el.css('borderColor', '#0548BE');
    let label = el.prev('label');
    label.css('color', '#0548BE');
  }

  $('.form__input-text').on('blur', function () {
    if($(this).val() === '') {
      errorStyle($(this));
    } else {
      confirmStyle($(this));
    }
  });
});