$(document).ready(function(){
  skillTextLeft('li#ps');
  skillTextLeft('li#html');
  skillTextLeft('li#jq');
  skillTextRight('li#ai');
  skillTextRight('li#css');
  skillTextRight('li#responsive');
});

function skillTextLeft(list) {
  $(list).children('figure.skill-icon').hover(function(){
    $(list).children('figure.skill-icon').siblings('.skill-text-table').stop().animate({
      opacity: 1,
      right: 190
    }, 300);
  }, function(){
    $(list).children('figure.skill-icon').siblings('.skill-text-table').stop().animate({
      opacity: 0,
      right: 0
    }, 300);
  });
}

function skillTextRight(list) {
  $(list).children('figure.skill-icon').hover(function(){
    $(list).children('figure.skill-icon').siblings('.skill-text-table').stop().animate({
      opacity: 1,
      left: 190
    }, 300);
  }, function(){
    $(list).children('figure.skill-icon').siblings('.skill-text-table').stop().animate({
      opacity: 0,
      left: 0
    }, 300);
  });
}