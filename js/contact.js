$(document).ready(function(){
  // contact 占쎈끃裕꾤뵳占�
  $('ul#navi-list li.contact').on('click', function(e){
    $('#contact').addClass('active').stop().animate({opacity:1}, 700);
  });
  // contact �좎럡�①뵳占�
  $('#contact').on('click', function(e){
    e.preventDefault();
    if(!$(e.target).is('.contact-box, .contact-box *')) {
      $('#contact').stop().animate({opacity:0}, 700, function(){
        $('#contact').removeClass('active');
      });
    }
  });
  $('button#contact-close').on('click', function(e){
    e.preventDefault();
    $('#contact').stop().animate({opacity:0}, 700, function(){
      $('#contact').removeClass('active');
    });
  });
});