/* =========================
ナビゲーションバーの動作
============================ */

$(function() {
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.navbar').toggleClass('active');
    return false;
  });
});