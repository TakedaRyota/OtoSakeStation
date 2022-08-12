/* =========================
トップ画面の動作
============================ */

$(function() {
  

  /**
   * スクロール時
   */
  $(window).scroll(function() {
    conceptAnimation();
    eventViewAnimation();
  });

  /**
   * コンセプトエリアのアニメーション
   */
  function conceptAnimation() {
    const triggerPositionTop01 = $('#concept-area').offset().top - 40;
    const triggerPositionTop02 = $('#concept-area').offset().top - 150;
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();
    if (scrollTop >= triggerPositionTop02) {
      $('.cross>span').show();
      $('#concept-area>.cross>span:nth-child(1)').addClass('rotateInAnimation01');
      $('#concept-area>.cross>span:nth-child(2)').addClass('rotateInAnimation02');
    }


    if (scrollBottom > triggerPositionTop01) {
      $('#concept-area').addClass('fadeUpAnimation01');
    } else {
      $('.cross>span').hide();
      $('#concept-area').removeClass('fadeUpAnimation01');
      $('#concept-area>.cross>span:nth-child(1)').removeClass('rotateInAnimation01');
      $('#concept-area>.cross>span:nth-child(2)').removeClass('rotateInAnimation02');
    }
  }

  /**
   * イベントエリアのアニメーション
   */
  function eventViewAnimation() {
    const triggerPositionTop01 = $('#event-view').offset().top - 100;
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();

    if (scrollBottom > triggerPositionTop01) {
      $('#event-view').addClass('fadeUpAnimation01');
    } else {
      $('#event-view').removeClass('fadeUpAnimation01');
    }
  }
});