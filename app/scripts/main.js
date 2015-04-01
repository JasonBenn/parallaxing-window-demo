$(document).ready(function() {
  function toggleDebug() {
    $('.parallax').toggleClass('debug-on');
  }

  $('body').click(toggleDebug)

  jQuery(function($) {
    $('.section-container').panelSnap();
  });

  $(window).resize(_.debounce(function(e) {
    var windowHeight = $(window).height();
    var distance = (windowHeight - 700) / 2.34;
    console.log(distance);
  }, 50));
})
