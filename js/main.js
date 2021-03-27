let perso, perso2, loop, controller, img;


const ctx = document.querySelector("#canvas").getContext("2d");

const W = ctx.canvas.width;
const H = ctx.canvas.height;


perso = new Gorvenal();
perso2 = new Cyborg();
console.log(perso2);



// function startGame() {

//     perso1 = new Gorvenal();
//     perso2 = new Cyborg();

// }

// startGame();





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

function update() {

    //PERSO 1
    if (controller.up) {

        perso.jump()
    }

    if (controller.left) {


        perso.moveLeft();

    }

    if (controller.right) {

        perso.moveRight();

    }

    perso.update();

    // //perso 2
    // if (controller.up) {

    //     perso2.jump()
    // }

    // if (controller.left) {


    //     perso2.moveLeft();

    // }

    // if (controller.right) {

    //     perso2.moveRight();

    // }

    // perso2.update();



}

function draw() {
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

    perso.draw();
    perso2.draw();

}


loop = function () {

    update()
    draw()

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);