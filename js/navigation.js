$(document).ready(function(){
  $('ul#navi-list').find('li.navi-btn a').on('click', function(e){
    if($(this.hash) !== "") {
      e.preventDefault();
      var goToPage = this.hash;
      $('html, body').stop().animate({scrollTop: $(goToPage).offset().top}, 800);
    }
  });

  var scrolled = null;
  $(window).on('scroll', function(){
    clearTimeout(scrolled);
    scrolled = setTimeout(function(){
      if($(window).scrollTop() < 3000) {
        $('header').removeClass('white');
      } else if($(window).scrollTop() >= 3000) {
        $('header').addClass('white');
      };
    }, 50);
  });
});