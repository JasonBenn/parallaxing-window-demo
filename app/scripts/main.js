$(document).ready(function() {
  function toggleDebug() {
    $('.parallax').toggleClass('debug-on');
  }

  $('body').click(toggleDebug)

  jQuery(function($) {
    $('.section-container').panelSnap();
  });
})
