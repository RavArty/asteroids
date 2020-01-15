const MovingObject = require('./moving_objects');

//window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', event => {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');
  const obj = new MovingObject({
    pos: [200, 200],
    vel: [20, 20],
    radius: 20,
    color: '#000000'
  });
  obj.draw(ctx);
});
