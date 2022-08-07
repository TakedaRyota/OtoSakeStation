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
      $('#concept-area>.cross>span:nth-child(1)').addClass('cross-anime01');
      $('#concept-area>.cross>span:nth-child(2)').addClass('cross-anime02');
    }


    if (scrollBottom > triggerPositionTop01) {
      $('#concept-area').addClass('fadeUpAnimation01');
    } else {
      $('#concept-area').removeClass('fadeUpAnimation01');
      $('#concept-area>.cross>span:nth-child(1)').removeClass('cross-anime01');
      $('#concept-area>.cross>span:nth-child(2)').removeClass('cross-anime02');
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