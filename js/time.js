// let executed = false;

// document.getElementById('timer').innerHTML =
//   00 + ":" + 03;


// function startTimer() {

//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if (s === 59) {
//     m = m - 1
//   }


//   document.getElementById('timer').innerHTML =
//     m + ":" + s;

//   let time = setTimeout(startTimer, 1000);



//   if (presentTime === "0:00") {

//     clearInterval(time)
//     document.getElementById('timer').classList.toggle("active")
//     arrP1.push(1)
//     arrP2.push(1)

//     setTimeout(function () {

//       perso.x = 250
//       perso.y = 350
//       perso.health = 600

//       perso2.x = 1200
//       perso2.y = 300
//       perso2.health = 750


//     }, 7000);


//   }


// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
//     sec = "0" + sec
//   }; // add zero in front of numbers < 10
//   if (sec < 0) {
//     sec = "59"
//   };
//   return sec;
// }

// function checkWinner() {

//   if (perso.health <= 0 && !executed) {
//     executed = true;
//     arrP2.push(1)

//     setTimeout(function () {
//       executed = false;
//     }, 3000);

//   }
//   if (perso2.health <= 0 && !executed) {
//     executed = true;
//     arrP1.push(1)

//     setTimeout(function () {
//       executed = false;
//     }, 3000);

//   }

//   if (arrP1.length >= 3) {
//     console.log("diplaywinner")

//   }

// }