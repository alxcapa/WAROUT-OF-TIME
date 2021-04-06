// document.getElementById('timer').innerHTML =
//     001 + ":" + 00;
// startTimer();

// function startTimer() {
//     var presentTime = document.getElementById('timer').innerHTML;
//     var timeArray = presentTime.split(/[:]+/);
//     var m = timeArray[0];
//     var s = checkSecond((timeArray[1] - 1));
//     if (s === 59) {
//         m = m - 1
//     }

//     if (m < 0) {

//         document.querySelector('#game-over').classList.toggle('active')
//         document.querySelector('#game-board').classList.toggle('active')
//         document.querySelector('.health').classList.toggle('active')
//     }

//     document.getElementById('timer').innerHTML =
//         m + ":" + s;
//     console.log(m)
//     setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//     if (sec < 10 && sec >= 0) {
//         sec = "0" + sec
//     }; // add zero in front of numbers < 10
//     if (sec < 0) {
//         sec = "59"
//     };
//     return sec;
// }


class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
    }
    startClick(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback) callback()
      }, 1000)
    }
    getMinutes() {
      return Math.floor(this.currentTime / 60)
    }
    getSeconds() {
      return this.currentTime % 60; // rest of the division by 60
    }
    twoDigitsNumber(num) {
      if (num < 10) {
        return `0${num}`; // add a 0
      } else {
        return `${num}`;  // just convert to a string
      }
    }
    stopClick() {
      clearInterval(this.intervalId);
    }
    resetClick() {
      this.currentTime = 0;
    }
    splitClick() {
      const mm = this.twoDigitsNumber(this.getMinutes());
      const ss = this.twoDigitsNumber(this.getSeconds());
  
      return `${mm}:${ss}`;
    }
  }