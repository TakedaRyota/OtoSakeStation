/* =========================
EVENTの動作
============================ */

$(function() {
  /**
   * 過去のイベントを見るボタン押下時
   */
  $('#old-event-open-btn, #old-event-close-btn').on('click', function() {
    $(this).toggleClass('active');
    $('#old-event-view').toggleClass('active');
    return false;
  });

});