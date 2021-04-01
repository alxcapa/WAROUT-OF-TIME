// // // class Characters {
// // //     constructor(name, health, strength, x, y) {
// // //         this.name = name;
// // //         this.health = health;
// // //         this.strength = strength;
// // //         this.x = x;
// // //         this.y = y;


// // //     }

// // //     cyborg1000() {
// // //         const ctx = document.querySelector("canvas").getContext("2d");

// // //         const cyborg2000l = document.getElementById("character2l");
// // //         ctx.beginPath();
// // //         ctx.drawImage(cyborg2000l, 1300, 450, 175, 303);
// // //         ctx.closePath();

// // //     }

// // //     attack() {
// // //         return this.strength;
// // //     }

// // //     receiveDamage(damage) {
// // //         this.health -= damage;
// // //     }

// // //     moveLeft() {
// // //         this.x += -20;
// // //     }


// // //     moveRight() {
// // //         this.x += 20;
// // //     }


// // // }




// // // // class Gorvenal extends Characters {

// // // //     battleCry() {
// // // //         return "Crie de barbare";
// // // //     }


// // // // }


// // // const perso = new Characters('john', 200, 30, 40, 40);
// // // console.log(perso.cyborg1000())



// // let perso1, perso2, raf, controller;


// // const ctx = document.querySelector("#canvas").getContext("2d");

// // const W = ctx.canvas.width;
// // const H = ctx.canvas.height;


// // // const montain = document.getElementById("montain");
// // // const bird = document.getElementById("bird");

// // // // const gorvenalf = document.getElementById("character1f");
// // // const gorvenall = document.getElementById("character1l");
// // // // const gorvenalr = document.getElementById("character1r");

// // // // const cyborg2000F = document.getElementById("character-2-f");
// // // const cyborg2000l = document.getElementById("character2l");
// // // // const cyborg2000R = document.getElementById("character-2-r");

// // controller =
// // {
// //     left:false,
// //     right:false,
// //     up:false,
// //     keyListener:function(event) {

// //       var key_state = (event.type == "keydown")?true:false;

// //       switch(event.keyCode) {

// //         case 37:// left key
// //           controller.left = key_state;
// //         break;
// //         case 38:// up key
// //           controller.up = key_state;
// //         break;
// //         case 39:// right key
// //           controller.right = key_state;
// //         break;

// //       }

// //     }
// //     document.onkeydown = function (e) {
// //         if (!perso1 || !perso2) return;

// //         console.log(e.keyCode)
// //         switch (e.keyCode) {
// //             case 37:
// //                 // left
// //                 perso1.moveLeft();
// //                 draw();
// //                 perso1.draw();
// //                 perso2.draw();

// //                 break;
// //             case 39:
// //                 //right
// //                 perso1.moveRight();
// //                 draw();
// //                 perso1.draw();
// //                 perso2.draw();

// //                 break;

// //             case 38:
// //                 perso1.moveUp();
// //                 draw();
// //                 perso1.draw();
// //                 perso2.draw();
// //                 break;

// //             case 40:
// //                 perso1.moveDown();
// //                 draw();
// //                 perso1.draw();
// //                 perso2.draw();
// //                 break;

// //             case 32:

// //                 perso1.jump();

// //                 break;

// //         }
// //     }


// // }


// // function animLoop() {



// //     draw(); // call draw() 60 FPS !!!

// // }


// // function startGame() {

// //     // Instantiate a car
// //     // car = new Car();





// //     perso1 = new Gorvenal();
// //     perso2 = new Cyborg();
// //     raf = requestAnimationFrame(animLoop);



// // }

// // startGame();


// // function draw() {
// //     //
// //     // toutes les 60  FPS 
// //     //

// //     ctx.clearRect(0, 0, W, H); // 🧽

// //     //MAP 1
// //     ctx.beginPath();
// //     ctx.fillStyle = "#7B6A58";
// //     ctx.fillRect(0, 500, W, 500);
// //     ctx.closePath();

// //     ctx.beginPath();
// //     ctx.fillStyle = "#009FE3";
// //     ctx.fillRect(0, 0, W, 500);
// //     ctx.closePath();

// //     ctx.beginPath();
// //     ctx.arc(1400, 160, 90, 0, 2 * Math.PI);
// //     ctx.fillStyle = "#CE712A";
// //     ctx.fill();
// //     ctx.closePath();


// //     ctx.beginPath();
// //     ctx.drawImage(montain, 0, 350);
// //     ctx.closePath();


// //     perso1;
// //     perso2;



// //     // ctx.drawImage(bird, 50, 50);
// //     // ctx.drawImage(bird, 400, 50);
// //     // ctx.drawImage(bird, 800, 150);



// //     //Personnages
// //     // ctx.beginPath();
// //     // ctx.drawImage(gorvenall, 400, 150);
// //     // ctx.closePath();

// //     // ctx.beginPath();
// //     // ctx.drawImage(cyborg2000l, 1300, 450, 175, 303);
// //     // ctx.closePath();

// // }

// class Gorvenal {
//     constructor(x, y, w) {


//         this.x = x;
//         this.y = y;


//         this.jumping = true;
//         this.x_velocity = 0;
//         this.y_velocity = 0;

//         const img = document.createElement('img');

//         img.onload = () => {
//             // 11:12:10
//             this.img = img;

//             const imgRatio = img.naturalWidth / img.naturalHeight;


//             this.w = w;
//             this.h = this.w / imgRatio;

//             // this.x = W / 2 - this.w / 2;
//             // this.y = H - this.h - 100;

//             this.draw()


//         }
//         img.src = "images/character-1.png";

//     }


//     draw() {

//         if (!this.img) return; // if `this.img` is not loaded yet => don't draw

//         ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

//     }


//     update() {


//         this.y_velocity += 1.5; // gravity
//         this.x += this.x_velocity;
//         this.y += this.y_velocity;
//         this.x_velocity *= 0.9; // friction
//         this.y_velocity *= 0.9; // friction

//         // pour retomber sur la ligne
//         if (this.y > 920 - 202 - 404) {

//             this.jumping = false;
//             this.y = 920 - 202 - 404;
//             this.y_velocity = 0;

//         }

//         // Si en dehors du cadre
//         if (this.x < -200) {

//             this.x = 1750;

//         } else if (this.x > 1750) {

//             this.x = -200;

//         }
//     }


//     moveLeft() {
//         this.x_velocity -= 0.5;

//     }
//     moveRight() {
//         this.x_velocity += 0.5;
//     }

//     jump() {
//         if (this.jumping === false) {
//             this.y_velocity -= 20;
//             this.jumping = true;
//         }


//     }

// }


// class Cyborg extends Gorvenal {

//     constructor(x, y, jumping, y_velocity, x_velocity) {


//         super(x, y, jumping, y_velocity, x_velocity)

//         // const img2 = document.createElement('img');

//         // img2.src = "images/character-2.png";

//         // this.img = img2;

//         // this.draw()
//     }



// }