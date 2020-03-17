"use strict";

class Song {
  constructor(songName, songLength) {
    this.songName = songName;
    this.songLength = songLength;
  }
  getSongName() {
    return this.songName;
  }
}

class PlayerList {
  constructor(songs) {
    this.songs = songs || [];
    this.currentTrackIndex = 0;
    if (songs && songs.length !== 0) {
      this.currentTrackName = songs[this.currentTrackIndex].getSongName();
    }
  }
  next() {
    if (this.songs && this.songs.length !== 0) {
      this.currentTrackIndex += 1;
      if (this.currentTrackIndex > this.songs.length - 1) {
        this.currentTrackIndex = 0;
      }
      this.currentTrackName = this.songs[this.currentTrackIndex].getSongName();
    }
  }
  prev() {
    if (this.songs && this.songs.length !== 0) {
      this.currentTrackIndex -= 1;
      if (this.currentTrackIndex < 0) {
        this.currentTrackIndex = this.songs.length - 1;
      }
      this.currentTrackName = this.songs[this.currentTrackIndex].getSongName();
    }
  }
  mixing() {
    if (this.songs && this.songs.length !== 0) {
      for (var i = this.songs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
      }
    }
  }
  getCurrentTrack() {
    return this.currentTrackName;
  }
}

class Player {
  constructor(playerList) {
    this.volume = 50;
    this.playerList = new PlayerList(playerList);
    this.status = "stop";
  }
  display() {
    if (this.playerList.songs.length > 0) {
      return (
        "Track: " +
        this.playerList.getCurrentTrack() +
        " - Status: " +
        this.status
      );
    } else {
      return "Empty";
    }
  }
  play() {
    if (this.playerList.songs.length > 0) {
      this.status = "play";
    }
  }
  pause() {
    if (this.playerList.songs.length > 0) {
      this.status = "pause";
    }
  }
  stop() {
    if (this.playerList.songs.length > 0) {
      this.status = "stop";
    }
  }
  volumeAdd(vol) {
    if (this.volume < 100) {
      if (this.volume + vol < 100) {
        this.volume += vol;
        return "Звук прибавлен на: " + vol;
      } else {
        return "Нельзя прибавить на столько громко!";
      }
    } else {
      return "Максимальная громкость!";
    }
  }
  volumeSubtract(vol) {
    if (this.volume > 0) {
      if (this.volume - vol > 0) {
        this.volume -= vol;
        return "Звук убавлен на: " + vol;
      } else {
        return "Нельзя убавить на столько тихо!";
      }
    } else {
      return "Минимальная громкость громкость!";
    }
  }
  next() {
    this.playerList.next();
  }
  prev() {
    this.playerList.prev();
  }
  mixing() {
    this.playerList.mixing();
  }
}
const player = new Player([
  new Song("One", 1),
  new Song("Two", 2),
  new Song("Three", 3)
]);

module.exports = { Player, Song };
