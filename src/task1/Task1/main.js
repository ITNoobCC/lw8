var catVasiliy = {
  name: 'Василий II',
  birthday: new Date(),
  listOfFears: ['vacuum cleaner', 'beep'],
  listOfPositive: ['ksksks'],
  meow: function () {
    console.log('Meow!');
  },
  reaction: function (feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log('run from here!!!!');
    }
    if (this.listOfPositive.indexOf(feeling) > -1) {
      console.log('Hmm? Food?! I`m already running.');
    }
  },
};