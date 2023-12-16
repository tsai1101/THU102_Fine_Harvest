$('[data-popup]').on('click', function () {
  const $target = $($(this).attr('data-popup'));
  const isTargetShown = !$target.hasClass('hide');
  $('.header-popup').addClass('hide');
  isTargetShown ? $target.addClass('hide') : $target.removeClass('hide');
});

$('#header-popup-menu').on('click', ({ target }) => {
  if (target.id === 'header-popup-menu') {
    $(target).addClass('hide');
  }
});

$('[data-menu]').on('click', function () {
  const $target = $($(this).attr('data-menu'));
  $(this).parents('.header-menu-body-container').addClass('hide');
  $target.removeClass('hide');
})