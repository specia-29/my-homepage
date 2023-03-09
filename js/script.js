$(function(){
  $('.spring').mouseover(function(){
    $('.spring').css({'opacity': '1'});
  });
  $('.spring').mouseout(function(){
    $('.spring').css({'opacity': '0.5'});
  });
});

$(function(){
  $('.summer').mouseover(function(){
    $('.summer').css({'opacity': '1'});
  });
  $('.summer').mouseout(function(){
    $('.summer').css({'opacity': '0.5'});
  });
});

$(function(){
  $('.autumn').mouseover(function(){
    $('.autumn').css({'opacity': '1'});
  });
  $('.autumn').mouseout(function(){
    $('.autumn').css({'opacity': '0.5'});
  });
});

$(function(){
  $('.winter').mouseover(function(){
    $('.winter').css({'opacity': '1'});
  });
  $('.winter').mouseout(function(){
    $('.winter').css({'opacity': '0.5'});
  });
});

// 最上部に移動するボタン
$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
