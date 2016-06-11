/**
 * scripts/main.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

import 'gsap'

export default class Main {
  constructor() {
    document.addEventListener('load', function() {
      //animate nav
      TweenMax.fromTo('nav', 0.4, {
        opacity: 0,
        y: -100
      }, {
        opacity: 1,
        y: 0
      })

      // TweenMax.staggerFromTo('nav a', 0.6, {
      //   opacity: 0,
      //   y: -100
      // }, {
      //   opacity: 1,
      //   y: 0,
      // }, 0.2)
    })
    
    document.addEventListener( 'DOMContentLoaded', function () {
      this.showContent()

    }.bind(this), false );
  }

  showContent(){
    // document.querySelector('.nav').classList.add('showNav');

    setTimeout(function () {
      document.querySelector('.main-logo').classList.add('animate');
    }, 2000);
  }

}
