module.exports = $(function () {
  $('#form-feedback').on('submit', function(e) {
    e.preventDefault();
    const data = $(this).serializeArray();
    let validate = true;
    let textPopup = 'Введите:';

    function warning(el, text, flag) {
      el.css('borderColor', '#e44845');
      textPopup += text;
      validate = flag;
    }

    if($('#name').val() === '') {
      warning($('#name'), ' имя ', false);
    }
    if($('#email').val() === '') {
      warning($('#email'), ' почту', false);
    }
    if($('#message').val() === '') {
      warning($('#message'), ' сообщение', false);
    }

    if(validate) {
      $.ajax({
        type: 'POST',
        url: 'form.php',
        data: data,
        success: function(msg) {
          const message = JSON.parse(msg);
          if(message.status === 'false') {
            // alert(message.text)
          }else{
            // alert(message.text)
          }
        },
      });
      textPopup = 'Сообщение отправлено';
      $('.form-feedback__popup-text').text(textPopup);
      $('.form-feedback__popup').show();
    }else{
      $('.form-feedback__popup-text').text(textPopup);
      $('.form-feedback__popup').show();
    }

  });

  $('.form-feedback__popup-button').on('click', function (e) {
    e.preventDefault();
    $('.form-feedback__popup').hide();
    $('.form-feedback__input-text').css('borderColor', 'transparent');
  });
});