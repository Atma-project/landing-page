import 'gsap'
import './helpers/gsap-plugins/DrawSVGPlugin'

export default class Main {
    constructor() {
        this.showContent()
        this.animateLogo()
        this.scroll()
    }

    showContent() {
        // document.querySelector('.nav').classList.add('showNav');
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

    animateLogo() {
        document.querySelector('.main-logo').classList.add('animate');
    }

    scroll() {
        $('a[href*="#"]:not([href="#"])').click(function(e) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

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
