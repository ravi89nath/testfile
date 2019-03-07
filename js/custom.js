$(function() {

    $('#login-form-link').click(function(event) {
      $("#login-form").delay(100).fadeIn(100);
      $("#forgot-pass").fadeOut(100);
      $("#confirm-pass").fadeOut(100);
     // $('#forgot-form-link').removeClass('active');
     // $(this).addClass('active');
      event.preventDefault();
    });
    $('#forgot-form-link').click(function(event) {
      $("#forgot-pass").delay(100).fadeIn(100);
      $("#login-form").fadeOut(100);
     // $('#login-form-link').removeClass('active');
     // $(this).addClass('active');
      event.preventDefault();
    });
    $('#submit-mail-id').click(function(event) {
      $("#confirm-pass").delay(100).fadeIn(100);
      $("#forgot-pass").fadeOut(100);
      //$('#forgot-form-link').removeClass('active');
     // $(this).addClass('active');
      event.preventDefault();
    });
  
  });
  