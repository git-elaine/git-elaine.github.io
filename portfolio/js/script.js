$('#menu-toggle').click(function () {
    $('body').toggleClass('menu-open')
});


// reload
// var isPad = (window.innerWidth<=960);
// $(window).resize(function(){
//     var w = window.innerWidth;
//     if ((w <= 960 && !isPad) || (w > 960 && isPad)){
//         location.reload();
//     }
// });


$(window).resize(function () {
    $('#menu-toggle').prop('checked', false);
});


$(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    if (windowTop > 200) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});


// scolltop
var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {
    scrollToTop.init();
});
var scrollToTop = {
    init: function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.btn-top').addClass('show');
            } else {
                $('.btn-top').removeClass('show');
            }
        });
        $('.btn-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }
};

// counter
if ($('#counter').length) {
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });
};


// filters
if ($('.filters').length) {
    $('.filters ul li').click(function () {
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })
};


// swiper
if ($('.swiper-container').length) {
    var mySwiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        //autoplay: true,
        speed: 200,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
};

//marquee-wrap
if ($('.marquee-wrap').length) {
    function handleMarquee(){
        const marquee = document.querySelectorAll('.marquee-wrap');
        let speed = 1;
        let lastScrollPos = 0;
        let timer;
      
        marquee.forEach(function(el){
          // stop animation on mouseenter
          mouseEntered = false;
          document.querySelector('.inner').addEventListener('mouseenter', function() {
            mouseEntered = true;
          })
          document.querySelector('.inner').addEventListener('mouseleave', function() {
            mouseEntered = false
          })
      
          const container = el.querySelector('.inner');
          const content = el.querySelector('.inner > *');
          //Get total width
          const  elWidth = content.offsetWidth;
          
          //Duplicate content
          let clone = content.cloneNode(true);
          container.appendChild(clone);
          
          let progress = 1;
          function loop(){
            if (mouseEntered === false) {progress = progress-speed;} 
            if (progress <= elWidth*-1) {progress=0;}
            container.style.transform = 'translateX(' + progress + 'px)';
            window.requestAnimationFrame(loop);
          }
          loop();
        });
        
        function handleSpeedClear(){
          speed = 1;
        }
      };
      
      handleMarquee();
};