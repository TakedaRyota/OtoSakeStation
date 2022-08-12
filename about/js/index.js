/* =========================
About画面の動作
============================ */

$(function() {

  $('.concept-music>img, .concept-music>.music-text').addClass('slideInAnimation01');
  setTimeout(function() {
    $('.concept-osake>img, .concept-osake>.osake-text').css({'visibility':'visible'});
    $('.concept-osake>img, .concept-osake>.osake-text').addClass('slideInAnimation02');
  }, 2000);
  setTimeout(function() {
    $('.cross>span').show();
    $('.cross>span:nth-child(1)').addClass('rotateInAnimation01');
    $('.cross>span:nth-child(2)').addClass('rotateInAnimation02');
  }, 4000);
  
  
});