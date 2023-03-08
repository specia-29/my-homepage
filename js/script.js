$(function(){
  $('.spring').mouseover(function(){
    $('.spring').css({'opacity': '1'});
  });
  $('.spring').mouseout(function(){
    $('.spring').css({'opacity': '0.5'});
  });
});