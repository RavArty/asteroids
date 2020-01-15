const Util = require('./util');
const MovingObject = require('./moving_object');

const DEFAULTS = {
  COLOR: '#505050',
  RADIUS: 25,
  SPEED: 4
};

function Asteroids(options) {
  options = options || {};
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos; //|| options.game.randomPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
}

// Must inherit before adding any properties (usually functions) to the Asteroid prototype
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
