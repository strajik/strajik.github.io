/* Lets use this sweet engine! Example usage below! */

// Initiate engine to draw to DOM canvas with id "myCanvas" and detail its
// dimensions.
jmParticleEngine.init('myCanvas', 400, 400);

// Define a particle generators - each generates particles of one particle type.
function particleGenerator1() {
  
}



function particleGenerator5() {
  var size = jmParticleEngine.randomNumber(128, -64, true);
  // Note context of this is bound to the emitter calling the function,
  // so we can simply grab the emitter's x and y for its starting point.
  return jmParticleEngine.generateParticle(
      // Start at the emitter's x co-ordinate.
      100,
      // Start at the emitter's y co-ordinate.
      100,
      // Width.
      125,
      // Height.
      125,
      // Rotation.
      jmParticleEngine.randomNumber(Math.PI * 2, 0, false),
      // xVelocity.
      jmParticleEngine.randomNumber(9, 4.5, false),
      // yVelocity.
      jmParticleEngine.randomNumber(9, 4.5, false),
      // Life.
      64,
      // How will particle change size vs life.
      // 0 - no change, same size always.
      // 1 - smaller with age.
      // 2 - larger with age.
      0,
      // Red.
      0,
      // Green.
      0,
      // Blue.
      0,
      // If we wish to use a preloaded image, specify index here.
      0
  );
}

// Generate emitters using the particle generator function defined above.
var emit1 = jmParticleEngine.generateEmitter(Math.ceil(window.innerWidth / 32),
    Math.ceil(window.innerHeight / 32), 200, particleGenerator5);
emit1.preloadImage('https://dl.dropboxusercontent.com/s/6544k3h6zq3ulai/fire7.png?dl=0');

var emitTmp =
    jmParticleEngine.generateEmitter(Math.ceil((window.innerWidth / 4) * 3),
    Math.ceil(window.innerHeight / 16), 750, particleGenerator1);

// Add emitters to engine! Ensure emit1 and emitTmp start
// straight away.
jmParticleEngine.addEmitter(emit1, true);

