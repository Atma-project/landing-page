import 'gsap'

export default class Main {
    constructor() {
        this.showContent()
        this.scroll()
    }

    showContent() {
        // document.querySelector('.nav').classList.add('showNav');
        document.querySelector('.main-logo').classList.add('animate')
        document.querySelector('.video').classList.add('show')

        //animate nav
        TweenMax.fromTo('nav', 0.4, {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            onComplete: () => {
                TweenMax.fromTo('.nav-logo', 0.4, {
                    opacity: 0
                }, {
                    opacity: 1
                })
                TweenMax.staggerFromTo('.nav-links a', 0.4, {
                    opacity: 0,
                    y: -100
                }, {
                    opacity: 1,
                    y: 0,
                }, 0.1)
            }
        })
    }

    scroll(){
      $('a[href*="#"]:not([href="#"])').click(function(e) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }

}
