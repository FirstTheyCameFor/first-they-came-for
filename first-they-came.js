(function() {

  $('.count').on('change', function() {

    var filename = 'assets/' + $('.count').val() + '.png';
    $('.profile-picture').attr('src', filename);

  });

  $('textarea').click(function() {
    $('textarea').select();
  });

})();
