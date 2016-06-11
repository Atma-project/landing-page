/**
 * scripts/main.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

export default class Main {
  constructor() {
    document.addEventListener( 'DOMContentLoaded', function () {
      this.showContent()
    }.bind(this), false );
  }

  showContent(){
    document.querySelector('.nav').classList.add('showNav');

    setTimeout(function () {
      document.querySelector('.main-logo').classList.add('animate');
    }, 2000);
  }
}
