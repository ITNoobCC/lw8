function Song(nameSong, lengthSong) {
  // название, длительность
  this.nameSong = nameSong;
  this.lengthSong = lengthSong;
}

function PlayerList(songs) {
  // хранит список песен
  this.songs = songs;

  this.getSong = function (index) {
    // todo: сделать проверку есть ли по index песня

    return (songs[index].nameSong);
  }
}

function Player(playerList) {
  this.playerList = playerList;
  this.status = 'play';
  var song = playerList.getSong(0);
  this.currentTrack = song;
  

  this.display = function() {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  };

  this.play = function() {
    this.status = 'play';
  };

  this.stop = function() {
    this.status = 'stop';
  };

  this.pause = function() {
    this.status = 'pause';
  };

  this.next = function() {
    var songId;
    for (var i = 0; i < song.length; i++)
    {
      if (song === playerList.songs[i].nameSong)
      {
        songId = i;
        console.log(songId);
      }
    }
    if (songId !== song.length - 1) {
      songId++;
      this.currentTrack = playerList.getSong(songId);
    } else {
      songId = 0;
      this.currentTrack = playerList.getSong(songId);
    }
  };

  this.prev = function() {
    if (i !== 0) {
      i--;
      this.currentTrack = playerList.getSong(i);
    } else {
      i = song.length - 1;
      this.currentTrack = playerList.getSong(i);
    }
  };
}

var playerList = new PlayerList([
  new Song('One', 1),
  new Song('Two', 2),
  new Song('Three', 3)
]);
var player = new Player(playerList);
