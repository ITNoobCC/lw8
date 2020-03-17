var Cat = require("./task1/Task1/main.js");
var Cashbox = require("./task1/Task2/main.js");
var PulloutArray = require("./task1/Task3/main.js");
var isTimeRangesIntersect = require("./task1/Task4/main.js");
var check = require("./task1/Task5/main.js");
var replaceString = require("./task1/Task6/main.js");
var Player = require("./task2/player.js");

var assert = require("assert");

describe("Cat", () => {
  it('Вызов функции meow(), вернет "Meow!"', () => {
    assert.deepEqual(Cat.meow(), "Meow!");
  });

  it('Вызов функции purrs(), вернет "Mu-uu-ur!"', () => {
    assert.deepEqual(Cat.purrs(), "Mu-uu-ur!");
  });
});

describe("Cashbox", () => {
  it("При передаче отрицательного amount, вернет ошибку ввода", () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.addPayment({ amount: -20, info: "Оплата штрафа" }),
      "Error enter!"
    );
  });
  it('Передача положительного amount и информации об оплате, вернет "Информация: amount"', () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.addPayment({ amount: 10, info: "Оплата ЖКХ" }),
      "Оплата ЖКХ" + ": " + 10
    );
  });
  it('Передача пустого значения amount + информацией об оплате "","info", вернет ошибку ввода!', () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.addPayment({ amount: "", info: "Оплата ЖКХ" }),
      "Error enter!"
    );
  });
  it("Передача пустого значени amount и info, вернет ошибку ввода!", () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.addPayment({ amount: "", info: "" }),
      "Error enter!"
    );
  });
  it("Передача пустого значения об информации оплате, вернет ошибку ввода!", () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.addPayment({ amount: "10", info: "" }),
      "Error enter!"
    );
  });
  it('Возврат клиенту имеющуюся сумму в кассе с информацией о возврате, вернет "Возврат: amount"', () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.refundPayment({ amount: 10, info: "Возврат клиенту" }),
      "Возврат клиенту" + ": " + 10
    );
  });
  it('Передача пустого значения amount + информацией о возврате "","возврат", вернет ошибку ввода!', () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.refundPayment({ amount: "", info: "Возврат клиенту" }),
      "Error enter!"
    );
  });
  it("Передача пустого значени возврата amount и info, вернет ошибку ввода!", () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.refundPayment({ amount: "", info: "" }),
      "Error enter!"
    );
  });
  it("Передача пустого значения о возврате оплаты, вернет ошибку ввода!", () => {
    const CashboxTest = new Cashbox();
    assert.deepEqual(
      CashboxTest.refundPayment({ amount: "10", info: "" }),
      "Error enter!"
    );
  });
});

describe("PulloutArray", () => {
  it("Передача в функцию: [1,2,3], вернет 1,2,3", () => {
    assert.deepEqual(PulloutArray([1, 2, 3]), [1, 2, 3]);
  });
  it("Передача в функцию: [1,[2],3], вернет 1,2,3", () => {
    assert.deepEqual(PulloutArray([1, [2], 3]), [1, 2, 3]);
  });
  it("Передача в функцию [], вернет []", () => {
    assert.deepEqual(PulloutArray([]), []);
  });
  it("Передача в функцию [null], вернет []", () => {
    assert.deepEqual(PulloutArray([null]), []);
  });
  it("Передача в функцию [NaN], вернет []", () => {
    assert.deepEqual(PulloutArray([NaN]), []);
  });
  it("Передача в функцию [undefined], вернет []", () => {
    assert.deepEqual(PulloutArray([undefined]), []);
  });
  it("Передача в функцию [false], вернет []", () => {
    assert.deepEqual(PulloutArray([false]), []);
  });
  it("Передача в функцию: [true,false], вернет []", () => {
    assert.deepEqual(PulloutArray([true, false]), []);
  });
  it('Передача в функцию: ["1","text"], вернет []', () => {
    assert.deepEqual(PulloutArray(["1", "text"]), []);
  });
});

describe("isTimeRangesIntersect", () => {
  it('Передача в функцию пересекающихся диапазонов: ["18:30", "19:30"], ["19:00", "21:00"], вернет true', () => {
    assert.deepEqual(
      isTimeRangesIntersect(["18:30", "19:30"], ["19:00", "21:00"]),
      true
    );
  });
  it('Передача в функцию не пересекающихся диапазонов: ["08:30", "09:30"], ["10:30", "12:00"], вернет false', () => {
    assert.deepEqual(
      isTimeRangesIntersect(["08:30", "09:30"], ["10:30", "12:00"]),
      false
    );
  });
  it('Передача в функцию пустое первое значение: [""], ["18:30", "19:30"], вернет false', () => {
    assert.deepEqual(isTimeRangesIntersect([""], ["18:30", "19:30"]), false);
  });
  it('Передача в функцию пустое второе значение: ["18:30", "19:30"], [""], вернет false', () => {
    assert.deepEqual(isTimeRangesIntersect(["18:30", "19:30"], [""]), false);
  });
  it('Передача в функцию одинаковых диапазонов: ["18:30", "19:30"], ["18:30", "19:30"], вернет true', () => {
    assert.deepEqual(
      isTimeRangesIntersect(["18:30", "19:30"], ["18:30", "19:30"]),
      true
    );
  });
});

describe("replaceString", () => {
  it('Передача в функцию: "There is simple text", "simple text", "my substring", вернет "There is my substring"', () => {
    assert.deepEqual(
      replaceString("There is simple text", "simple text", "my substring"),
      "There is my substring"
    );
  });

  it('Передача в функцию: "There is simple text", "nothing", "my substring", вернет false', () => {
    assert.deepEqual(
      replaceString("There is simple text", "nothing", "my substring"),
      false
    );
  });

  it("Передача в функцию: null, NaN, undefined, вернет false", () => {
    assert.deepEqual(replaceString(null, NaN, undefined), false);
  });

  it('Передача в функцию с заменой подстроки в нескольких местах: "Hello world", "word", "world Sem", вернет "Hello world Sem"', () => {
    assert.deepEqual(
      replaceString("Hello world", "world", "world Sem"),
      "Hello world Sem"
    );
  });
});

//__TASK2__//

describe("Player", () => {
  it('Вызов функции Dispaly(), вернет "One - Status: stop"', () => {
    var playerTest = new Player.Player([
      new Player.Song("One", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    assert.deepEqual(playerTest.display(), "Track: One - Status: stop");
  });
  it('Вызов функции Play(), вернет "One - Status: play"', () => {
    var playerTest = new Player.Player([
      new Player.Song("One", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    playerTest.play();
    assert.deepEqual(playerTest.display(), "Track: One - Status: play");
  });
  it('Вызов функции Pause(), вернет "Noize - Status: pause"', () => {
    var playerTest = new Player.Player([
      new Player.Song("Noize", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    playerTest.pause();
    assert.deepEqual(playerTest.display(), "Track: Noize - Status: pause");
  });

  it('Вызов функции Stop(), вернет "Good Job - Status: stop"', () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    playerTest.stop();
    assert.deepEqual(playerTest.display(), "Track: Good Job - Status: stop");
  });
  it('Вызов функции Next(), вернет "Two - Status: stop"', () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    playerTest.next();
    assert.deepEqual(playerTest.display(), "Track: Two - Status: stop");
  });
  it('Вызов функции Prev(), вернет "Three - Status: stop"', () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    playerTest.prev();
    assert.deepEqual(playerTest.display(), "Track: Three - Status: stop");
  });
  it('Вызов функции Dispaly() у пустого плейлиста, вернет "Empty"', () => {
    var playerTest = new Player.Player([]);
    assert.deepEqual(playerTest.display(), "Empty");
  });
  it("Вызов функции volumeAdd(70) которое выходит за пределы допустимого (>100), вернет ошибку", () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    assert.deepEqual(playerTest.volumeAdd(70), 'Нельзя прибавить на столько громко!');
  });
  it("Вызов функции volumeSubtract(70) которое выходит за пределы допустимого (<0), вернет ошибку", () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    assert.deepEqual(playerTest.volumeSubtract(70), 'Нельзя убавить на столько тихо!');
  });
  it("Вызов функции volumeAdd(20), прибавит звук на 20", () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    assert.deepEqual(playerTest.volumeAdd(20), 'Звук прибавлен на: ' + 20);
  });
  it("Вызов функции volumeSubtract(20), убавит звук на 20", () => {
    var playerTest = new Player.Player([
      new Player.Song("Good Job", 1),
      new Player.Song("Two", 2),
      new Player.Song("Three", 3)
    ]);
    assert.deepEqual(playerTest.volumeSubtract(20), 'Звук убавлен на: ' + 20);
  });
});
