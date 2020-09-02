$(function() {
  // Tabの切替トリガー
  var $tabTrigger = $('.js-tab-trigger');

  // Tabのコンテンツ
  var $tabContent = $('.js-tab-content');

  // トリガーのクリック
  $tabTrigger.on('click', function(event) {
    // Clickイベントを止める
    event.preventDefault();

    // クリックしたタブ要素とdata属性を取得
    var $target = $(event.currentTarget);
    var $list = $target.data('tab-list');
    var $info = $target.data('tab-info');

    // 選択中のトリガーを更新する
    $tabTrigger
      .filter('[data-tab-list="' + $list + '"]')
      .removeClass('is-current')
      .filter('[data-tab-info="' + $info + '"]')
      .addClass('is-current');

    // 選択中のコンテンツを更新する
    $tabContent
      .filter('[data-tab-list="' + $list + '"]')
      .removeClass('is-current')
      .hide()
      .filter('[data-tab-info="' + $info + '"]')
      .addClass('is-current')
      .show();
  });
});
