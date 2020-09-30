var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back_to_top').fadeIn(400);
        } else {
          $('.back_to_top').fadeOut(400);
        }
      });

      $('.back_to_top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });