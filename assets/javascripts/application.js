$(document).ready( function(){
  window.onresize = function(event) {
    if( $(document).width() > 1200 ) fixedNavbar();
  };

  if( $(document).width() > 1200 ) fixedNavbar();
});

function fixedNavbar() {
  var navbar_right = $('#navbar-right'),
      navbar_top = $('#navbar-top'),
      caurusel = $('#myCarousel'),
      total_height = navbar_top.height() + caurusel.height();

  navbar_right.affix({
      offset: {
        top: total_height
      }
  });
}
