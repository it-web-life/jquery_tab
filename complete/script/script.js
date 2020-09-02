$(function() {
  /** Tabの切替トリガー */
  var $tabTrigger = $('.js-tab-trigger');

  /** Tabのコンテンツ */
  var $tabContent = $('.js-tab-content');
  console.log('$tabContent', $tabContent);

  $tabTrigger.on('click', function(event) {
    console.log('click!');
    // Clickイベントを止める
    event.preventDefault();

    var $target = $(event.currentTarget);
    var $list = $target.data('tab-list');
    var $info = $target.data('tab-info');

    console.log('$target', $target);
    console.log('$list', $list);
    console.log('$info', $info);

    $tabTrigger
      .filter('[data-tab-list="' + $list + '"]')
      .removeClass('is-current')
      .filter('[data-tab-info="' + $info + '"]')
      .addClass('is-current');

    $tabContent
      .filter('[data-tab-list="' + $list + '"]')
      .removeClass('is-current')
      .hide()
      .filter('[data-tab-info="' + $info + '"]')
      .addClass('is-current')
      .show();
  });
});
