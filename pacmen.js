const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // set initial position
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';

  // add new image to game container
  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (
    item.position.x + item.newimg.width >= window.innerWidth ||
    item.position.x <= 0
  ) {
    item.velocity.x = -item.velocity.x;
  }
  if (
    item.position.y + item.newimg.height >= window.innerHeight ||
    item.position.y <= 0
  ) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac());
}

if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
