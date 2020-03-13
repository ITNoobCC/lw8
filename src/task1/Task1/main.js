'use strict';
var Cat = {
  name: 'Василий',
  birthday: new Date(),
  listOfFears: ['vacuum cleaner', 'beep'],
  listOfPositive: ['eat', 'play'],
  call: ['ksksks'],
  meow: function() {
    console.log('Meow!');
    return 'Meow!';
  },
  purrs: function() {
    console.log('Mu-uu-ur!');
    return 'Mu-uu-ur!';
  },
  reaction: function(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log('run from here!!!!');
      return 'run from here!!!!';
    }
    if (this.listOfPositive.indexOf(feeling) > -1) {
      this.purrs();
      console.log('run against the leg');
      return 'run against the leg';
    }
    if (this.call.indexOf(feeling) > -1) {
      console.log('runs to you');
      this.meow();
      this.purrs();
      return 'runs to you';
    }
  }
};
console.log(Cat.name);

//_TESTS_//
module.exports = Cat;