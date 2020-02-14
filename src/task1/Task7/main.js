var fieldSize = 5;
var soldier1 = {
  name: 'John',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function () {
    // console.log();
    if (this.health > 0) {
      var shotX = Math.floor(Math.random() * fieldSize);
      var shotY = Math.floor(Math.random() * fieldSize);
      console.log(this.name, 'выстрелил в координаты [' + shotX + ';' + shotY + ']');
      return [shotX, shotY];
    }
  },
  spawn: function () {
    this.currentCoordinates.x = Math.floor(Math.random() * fieldSize);
    this.currentCoordinates.y = Math.floor(Math.random() * fieldSize);
    console.log(this.name + ' spawned at ' + this.currentCoordinates.x + ' ; ' + this.currentCoordinates.y);
  },
  checkDamage: function (x, y) {
    if (x === this.currentCoordinates.x && y === this.currentCoordinates.y) {
      this.health -= 25;
      return ('По ' + this.name + '`у попали ');
    } else {
      return ('По ' + this.name + '`у промазали ');
    }
  }
};

var soldier2 = {
  name: 'Gook',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function () {
    // console.log(x, y);
    if (this.health > 0) {
      var shotX = Math.floor(Math.random() * fieldSize);
      var shotY = Math.floor(Math.random() * fieldSize);
      console.log(this.name, 'выстрелил в координаты [' + shotX + ';' + shotY + ']');
      return [shotX, shotY];
    }
  },
  spawn: function () {
    this.currentCoordinates.x = Math.floor(Math.random() * fieldSize);
    this.currentCoordinates.y = Math.floor(Math.random() * fieldSize);
    console.log(this.name + ' spawned at ' + this.currentCoordinates.x + ' ; ' + this.currentCoordinates.y);
  },
  checkDamage: function (x, y) {
    if (x === this.currentCoordinates.x && y === this.currentCoordinates.y) {
      this.health -= 25;
      return ('По ' + this.name + '`у попали ');
    } else {
      return ('По ' + this.name + '`у промазали ');
    }
  }
};
soldier1.spawn();
soldier2.spawn();

setInterval(function () {
  if (soldier1.health > 0 && soldier2.health > 0) {
    if (soldier1.health > 0) {
      arr = soldier1.shot();
      console.log(soldier2.checkDamage(arr[0], arr[1]));
    }
    // arr = soldier1.shot();
    // soldier2.checkDamage(arr[0], arr = [1]);
    if (soldier2.health > 0) {
      arr1 = soldier2.shot();
      console.log(soldier1.checkDamage(arr1[0], arr1[1]));
    }
    // arr1 = soldier2.shot();
    // soldier1.checkDamage(arr1[0], arr1 = [1]);

    if (soldier1.health <= 0) {
      console.log(soldier1.name, 'проиграл! :с');
      console.log(soldier2.name, 'выиграл! :3');
    } else if (soldier2.health <= 0) {
      console.log(soldier1.name, 'проиграл! :с');
      console.log(soldier2.name, 'выиграл! :3');
    }
  }
}, 100);