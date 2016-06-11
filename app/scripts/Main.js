import 'gsap'

export default class Main {
    constructor() {
        this.showContent()
    }

    showContent() {
        // document.querySelector('.nav').classList.add('showNav');
        document.querySelector('.main-logo').classList.add('animate');

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

}
