$(document).ready(function() {
  function toggleDebug() {
    $('.parallax').toggleClass('debug-on');
  }

  function resizeSlowLayer() {
    var distance = ($(window).height() - 700) / 2.34;
    var perspective = parseInt($('.parallax').css('perspective'), 10);

    $('.parallax__layer--slow').css({
      'transform': 'translateZ(' + -1 * distance + 'px) scale(' + (distance / perspective + 1) + ')'
    });
  }

  $('body').click(toggleDebug)

  jQuery(function($) {
    $('.section-container').panelSnap();
    resizeSlowLayer();
  });

  $(window).resize(_.debounce(resizeSlowLayer, 50));
})
