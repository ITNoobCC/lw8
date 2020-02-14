var catVasiliy = {
  name: 'Василий',
  birthday: new Date(),
  listOfFears: ['vacuum cleaner', 'beep'],
  listOfPositive: ['eat', 'play'],
  call: ['ksksks'],
  meow: function() {
    console.log('Meow!');
  },
  purrs: function() {
    console.log('Mu-uu-ur!');
  },
  reaction: function(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log('run from here!!!!');
    }
    if (this.listOfPositive.indexOf(feeling) > -1)
    {
      this.purrs();
      console.log('rub against the leg');
    }
    if (this.call.indexOf(feeling) > -1)
    {
      console.log('runs to you');
      this.meow();
      this.purrs();
    }
  }
};