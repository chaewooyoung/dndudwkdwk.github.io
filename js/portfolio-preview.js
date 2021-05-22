$(document).ready(function(){
  slidePreview('#backje');
  slidePreview('#hyundai');
  slidePreview('#kiost');
  slidePreview('#kiost2');
    
  portfolioTab('ul#portfolio-tabmenu li.backje', '#backje');
  portfolioTab('ul#portfolio-tabmenu li.hyundai', '#hyundai');
  portfolioTab('ul#portfolio-tabmenu li.kiost', '#kiost');
  portfolioTab('ul#portfolio-tabmenu li.kiost2', '#kiost2');
});
function portfolioTab(list, slideBox) {
  $(list).on('click', function(e){
    e.preventDefault();
    $(list).addClass('active');
    $(list).siblings('li.web-item').removeClass('active');
      
    $(slideBox).addClass('active');
    $(slideBox).siblings('.slide-box').removeClass('active');
      
  });
}

function slidePreview(listbox) {
  $(listbox).children('ul.preview-wrap').bxSlider({
    auto: true,
    mode: 'fade',
    pause: 2000,
    pager: false,
    nextText: '',
    prevText: '',
    prevSelector: $('#left-btn'),
    nextSelector: $('#right-btn'),
  });
}