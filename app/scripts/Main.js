import 'gsap'
import './helpers/gsap-plugins/DrawSVGPlugin'

export default class Main {
    constructor() {
		this.showNavBar()
        this.animateLogo()
        this.animateBackgrounds()
    }

    animateBackgrounds() {
        TweenMax.to('.backgrounds .base', 4, {
            opacity: 0,
            yoyo: true,
            repeat: -1,
            ease: Sine.noEase
        })
    }

	showNavBar() {
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

}
