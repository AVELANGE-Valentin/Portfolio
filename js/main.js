(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 80,
            backSpeed: 20,
            smartBackspace: true,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


var modalOnVaOu = document.getElementById("onVaOuModal");
var btnOnVaOu = document.getElementById("onVaOu");

var modalHeyalink = document.getElementById("heyalinkModal");
var btnHeyalink = document.getElementById("heyalink");

var modalEasysave = document.getElementById("easysaveModal");
var btnEasysave = document.getElementById("easysave");

var modalSportDehors = document.getElementById("sportDehorsModal");
var btnSportDehors = document.getElementById("sportDehors");

var modalSinistres = document.getElementById("sinistresModal");
var btnSinistres = document.getElementById("sinistres");

var modalOnBoarding = document.getElementById("onBoardingModal");
var btnOnBoarding = document.getElementById("onBoarding");

var span = document.getElementsByClassName("close")[0];

btnOnVaOu.onclick = function() {
    modalOnVaOu.style.display = "block";
}
btnHeyalink.onclick = function() {
    modalHeyalink.style.display = "block";
}
btnEasysave.onclick = function() {
    modalEasysave.style.display = "block";
}
btnSportDehors.onclick = function() {
    modalSportDehors.style.display = "block";
}
btnSinistres.onclick = function() {
    modalSinistres.style.display = "block";
}
btnOnBoarding.onclick = function() {
    modalOnBoarding.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modalOnVaOu) {
    modalOnVaOu.style.display = "none";
  }
  if (event.target == modalHeyalink) {
    modalHeyalink.style.display = "none";
  }
  if (event.target == modalEasysave) {
    modalEasysave.style.display = "none";
  }
  if (event.target == modalSportDehors) {
    modalSportDehors.style.display = "none";
  }
  if (event.target == modalSinistres) {
    modalSinistres.style.display = "none";
  }
  if (event.target == modalOnBoarding) {
    modalOnBoarding.style.display = "none";
  }
}