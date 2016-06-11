initSprites() {
console.log('load')
this.renderer = PIXI.autoDetectRenderer(800, 600, {trasparent: true});
document.querySelector('.world').appendChild(this.renderer.view);

// create the root of the scene graph
this.stage = new PIXI.Container();

PIXI.loader
.add('./scripts/water.json')
.load(() => {
  // create an array of textures from an image path
  var frames = [];

  for (var i = 0; i < 150; i++) {
    var val;
    if (i < 10) {
      val = '0000'
    } else if (i > 9 && i < 100) {
      val = '000'
    } else if (i > 99) {
      val = '00'
    }

    // magically works since the spritesheet was loaded with the pixi loader
    frames.push(PIXI.Texture.fromFrame('Animation-aqua_' + val + i + '.png'));
  }

  // create a MovieClip (brings back memories from the days of Flash, right ?)
  this.movie = new PIXI.extras.MovieClip(frames);

  this.movie.anchor.set(0.5);
  this.movie.animationSpeed = 0.5;

  this.movie.play();
  this.stage.addChild(this.movie);
  this.animate();
});
}

onAssetsLoaded() {

}

animate() {
// render the stage container
this.renderer.render(stage);

requestAnimationFrame(animate);
}
