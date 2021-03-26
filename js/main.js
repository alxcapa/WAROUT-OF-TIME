let perso1, loop, controller, img;


const ctx = document.querySelector("#canvas").getContext("2d");

const W = ctx.canvas.width;
const H = ctx.canvas.height;


let persoTest = new Gorvenal();



// persoTest = new Cyborg();


perso1 = {

    h: 404.3126684636119,

    jumping: false,
    w: 200,
    x: 250,
    x_velocity: 0,
    y_velocity: 0,
    y: 432

}




// function startGame() {

//     perso1 = new Gorvenal();
//     perso2 = new Cyborg();

// }

// startGame();


function startGame() {

    img = document.querySelector("#perso")

}

startGame();




controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37: // left key
                controller.left = key_state;
                break;
            case 38: // up key
                controller.up = key_state;
                break;
            case 39: // right key
                controller.right = key_state;
                break;

        }

    }

}


loop = function () {

    if (controller.up && perso1.jumping == false) {

        perso1.y_velocity -= 20;
        perso1.jumping = true;

    }

    if (controller.left) {

        perso1.x_velocity -= 0.5;

    }

    if (controller.right) {

        perso1.x_velocity += 0.5;

    }

    perso1.y_velocity += 1.5; // gravity
    perso1.x += perso1.x_velocity;
    perso1.y += perso1.y_velocity;
    perso1.x_velocity *= 0.9; // friction
    perso1.y_velocity *= 0.9; // friction

    // if rectangle is falling below floor line
    if (perso1.y > 920 - 202 - 404) {

        perso1.jumping = false;
        perso1.y = 920 - 202 - 404;
        perso1.y_velocity = 0;

    }

    // if rectangle is going off the left of the screen
    if (perso1.x < -200) {

        perso1.x = 1750;

    } else if (perso1.x > 1750) { // if rectangle goes past right boundary

        perso1.x = -200;

    }

   
    ctx.clearRect(0, 0, W, H); // 🧽

    //MAP 1
    ctx.beginPath();
    ctx.fillStyle = "#7B6A58";
    ctx.fillRect(0, 500, W, 500);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#009FE3";
    ctx.fillRect(0, 0, W, 500);
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(1400, 160, 90, 0, 2 * Math.PI);
    ctx.fillStyle = "#CE712A";
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.drawImage(montain, 0, 350);
    ctx.closePath();


    ctx.drawImage(img, perso1.x, perso1.y, perso1.w, perso1.h);


    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);