var cat = require('./task1/Task1/main.js');
var assert = require('assert');
describe('Task1 -- Cat', () => {
  it ('Тест функции meow()', () => {
    assert.deepEqual(cat.meow(), 'Meow!');
  });

  it ('Тест функции purrs()', () => {
    assert.deepEqual(cat.purrs(), 'Mu-uu-ur!');
  });
});


var cashbox = require('./task1/Task2/main.js');
describe('Task2 -- Cashbox -> add: ', () => {
  it ('Попытка добавить отрицательное число', () => {
    assert.deepEqual(cashbox.addPayment({ amount: -20, info: 'Оплата штрафа' }),'Error enter!');
  });
  it ('Попытка добавить положительное число с информацией оплаты', () => {
    assert.deepEqual(cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' }),'Оплата ЖКХ' + ': ' + 10);
  });
  it ('Попытка передать пустое значение суммы []["text"]', () => {
    assert.deepEqual(cashbox.addPayment({ amount: '', info: 'Оплата ЖКХ' }),'Error enter!');
  });
  it ('Попытка передать пустоту [][]', () => {
    assert.deepEqual(cashbox.addPayment({ amount: '', info: '' }),'Error enter!');
  });
  it ('Попытка передать пустое значение иформации оплаты [10][]', () => {
    assert.deepEqual(cashbox.addPayment({ amount: '10', info: '' }),'Error enter!');
  });
});
describe('Task2 -- Cashbox -> refund: ', () => {
  it ('Попытка возвратить сумму которая имеется в кассе', () => {
    assert.deepEqual(cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }),'Возврат клиенту' + ': ' + 10);
  });
  it ('Попытка возвратить сумму которая не имеется в кассе', () => {
    assert.deepEqual(cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }), 'Error enter!');
  });
  it ('Попытка возвратить пустое значение []["text"]', () => {
    assert.deepEqual(cashbox.refundPayment({ amount: '', info: 'Возврат клиенту' }),'Error enter!');
  });
  it ('Попытка возвратить пустые значение [][]', () => {
    assert.deepEqual(cashbox.refundPayment({ amount: '', info: '' }),'Error enter!');
  });
  it ('Попытка возвратить пустое значение [10][]', () => {
    assert.deepEqual(cashbox.refundPayment({ amount: '10', info: '' }),'Error enter!');
  });
});

var pulloutArray = require('./task1/Task3/main.js');
describe('Task3 -- pulloutArray: ', () => {
  it('Передача в функцию: [1,2,3]', () => {
    assert.deepEqual(pulloutArray([1, 2, 3]), [1, 2, 3]);
  });
  it('Передача в функцию: [1,[2],3]', () => {
    assert.deepEqual(pulloutArray([1, [2], 3]), [1, 2, 3]);
  });
  it('Передача в функцию: [],[null],[NaN],[undefined],[false]', () => {
    assert.deepEqual(pulloutArray([]), []);
    assert.deepEqual(pulloutArray([null]), []);
    assert.deepEqual(pulloutArray([NaN]), []);
    assert.deepEqual(pulloutArray([undefined]), []);
    assert.deepEqual(pulloutArray([false]), []);
  });
  it('Передача в функцию: [true,false],["1","text"]', () => {
    assert.deepEqual(pulloutArray([true, false]), []);
    assert.deepEqual(pulloutArray(['1', 'text']), []);
  });
});

var isTimeRangesIntersect = require('./task1/Task4/main.js');
describe('Task4 -- isTimeRangesIntersect: ', () => {
  it('Передача в функцию: ["18:30", "19:30"], ["19:00", "21:00"]', () => {
    assert.deepEqual(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']), true);
  });
  it('Передача в функцию: ["08:30", "09:30"], ["10:30", "12:00"]', () => {
    assert.deepEqual(isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']), false);
  });
  it('Передача в функцию: ["18:30", "19:30"], [""]', () => {
    assert.deepEqual(isTimeRangesIntersect(['18:30', '19:30'], ['']), false);
  });
});

//TODO 5TASK!!!!!!!!!!!!!!!!!!!
// var check = require('./Task5/main.js');
// describe('Task5 -- check: ', () => {
//   it('Передача в функцию: [], ["number"]', () => {
//     assert.deepEqual(check([], 'number'), console.log('Ошибка - validation'));
//   });
// });

var replaceString = require('./task1/Task6/main.js');
describe('Task6 -- replaceString: ', () => {
  it('Передача в функцию: "There is simple text", "simple text", "my substring"', () => {
    assert.deepEqual(replaceString('There is simple text', 'simple text', 'my substring'), "There is my substring");
  });

  it('Передача в функцию: "There is simple text", "nothing", "my substring"', () => {
    assert.deepEqual(replaceString('There is simple text', 'nothing', 'my substring'), false);
  });

  it('Передача в функцию: null, NaN, undefined', () => {
    assert.deepEqual(replaceString(null, NaN, undefined), false);
  });
});

//TODO 7TASK!!!!!!
// var Solider = require('./Task7/main.js');
// describe('Task7 -- Solider: ', () => {
//   it('Передача в функцию: "There is simple text", "simple text", "my substring"', () => {
//     assert.deepEqual(,Solider.playerOne.shot);
//   });
// });



//__TASK2__//

var player = require('./task2/player.js');
player.index = 0;
player.status = 'stop';
describe('Task2 -- Player Testing: ', () => {
  it('Player - function: Dispaly()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
  player.play();
  it('Player - function: Play()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
  player.pause();
  it('Player - function: Pause()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
  player.stop();
  it('Player - function: Stop()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
  player.next();
  it('Player - function: Next()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
  player.prev();
  it('Player - function: Prev()', () => {
    assert.deepEqual(player.display(), 'Track: ' + player.currentTrack + '- Status: ' + player.status);
  });
});
