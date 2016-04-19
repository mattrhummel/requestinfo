  $(document).foundation({
    tab: {
      callback : function (tab) {
        console.log(tab);
      }
    }
  });
 $('.tabs').on('toggled', function (event, tab) {
    console.log(tab);
  });
$('.next-tab').click(function() {
  $('.tabs li.active').next().children('a').click();
});