'use strict';
var playerOne = {
  name: 'Player one',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function() {
    var playerOneShotX;
    var playerOneShotY;
    do {
      playerOneShotX = Math.floor(Math.random() * 3);
      playerOneShotY = Math.floor(Math.random() * 3);
    } while (
      playerOneShotX === playerOne.currentCoordinates.x &&
      playerOneShotY === playerOne.currentCoordinates.y
    );

    console.log('Выстрел 1 игрока: ', playerOneShotX, playerOneShotY);
    return [playerOneShotX, playerOneShotY];
  },
  spawn: function(x, y) {
    (this.currentCoordinates.x = x);
    (this.currentCoordinates.y = y);
    console.log('Spawn player one:', x, y);
  },
  checkDamage: function(playerTwoShotX, playerTwoShotY) {
    if (
      playerTwoShotX === playerOne.currentCoordinates.x &&
      playerTwoShotY === playerOne.currentCoordinates.y
    ) {
      if (playerOne.health > 0) {
        for (var i = 0; i < 25; i++) {
          playerOne.health--;
        }
      }
    }
  }
};
var playerTwo = {
  name: 'Player two',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function() {
    var playerTwoShotX;
    var playerTwoShotY;
    do {
      playerTwoShotX = Math.floor(Math.random() * 3);
      playerTwoShotY = Math.floor(Math.random() * 3);
    } while (
      playerTwoShotX === playerTwo.currentCoordinates.x &&
      playerTwoShotY === playerTwo.currentCoordinates.y
    );

    console.log('Выстрел 2 игрока: ', playerTwoShotX, playerTwoShotY);
    return [playerTwoShotX, playerTwoShotY];
  },
  spawn: function(x, y) {
    (this.currentCoordinates.x = x);
    (this.currentCoordinates.y = y);
    console.log('Spawn player two:', x, y);
  },
  checkDamage: function(playerOneShotX, playerOneShotY) {
    if (
      playerOneShotX === playerTwo.currentCoordinates.x &&
      playerOneShotY === playerTwo.currentCoordinates.y
    ) {
      if (playerTwo.health > 0) {
        for (var i = 0; i < 25; i++) {
          playerTwo.health--;
        }
      }
    }
  }
};

function spawnSolider() {
  var playerOneSpawnX;
  var playerOneSpawnY;
  var playerTwoSpawnX;
  var playerTwoSpawnY;

  do {
    playerOneSpawnX = Math.floor(Math.random() * 3);
    playerOneSpawnY = Math.floor(Math.random() * 3);

    playerTwoSpawnX = Math.floor(Math.random() * 3);
    playerTwoSpawnY = Math.floor(Math.random() * 3);
  } while (
    playerOneSpawnX === playerTwoSpawnX &&
    playerOneSpawnY === playerTwoSpawnY
  );
  playerOne.spawn(playerOneSpawnX, playerOneSpawnY);
  playerTwo.spawn(playerTwoSpawnX, playerTwoSpawnY);
}

spawnSolider();
setInterval(function() {
  var playerOneShot = playerOne.shot(); // return { x: sdsd, y: 2}
  playerTwo.checkDamage(playerOneShot[0], playerOneShot[1]);

  var playerTwoShot = playerTwo.shot();
  playerOne.checkDamage(playerTwoShot[0], playerTwoShot[1]);

  if (playerTwo.health === 0) {
    console.log('Победил - ', playerOne.name);
    console.log('Проиграл - ', playerTwo.name);
  } else if (playerOne.health === 0) {
    console.log('Победил - ', playerTwo.name);
    console.log('Проиграл - ', playerOne.name);
  }
  clearInterval(playerOne.health === 0 || playerTwo.health === 0);
}, 100);

module.exports = {playerOne,playerTwo}