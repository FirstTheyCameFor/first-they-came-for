(function() {

  $('.count').on('change', function() {

    var filename = 'assets/' + $('.count').val() + '.png';
    $('img.profile-picture').attr('src', filename);
    $('a.profile-picture').attr('href', filename);

  });

  $('textarea').click(function() {
    $('textarea').select();
  });

  $('.circle-copy').click(function() {

    $('textarea').select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      alert('Oops, unable to copy automatically');
    }

  });

})();
