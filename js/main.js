let perso, perso2, loop, controller, img1, img2, cloud1, cloud2, cloud3, cloud4, directionPerso1, directionPerso2;
// const attacks = [];


const ctx = document.querySelector("#canvas").getContext("2d");


//CLOUNDS
const cloud = document.createElement('img');
cloud.src = "images/cloud.png";

// const cloudBis = document.createElement('img');
// cloudBis.src = "images/cloud2.png";

// IMAGE PERSONNAGES 
img1 = document.querySelector('#perso');
img1_left = document.querySelector('#perso-l');
img1_right = document.querySelector('#perso-r');

img2 = document.querySelector('#perso2');
img2_left = document.querySelector('#perso2-l');
img2_right = document.querySelector('#perso2-r');


const imgRatio1 = img1.naturalWidth / img1.naturalHeight;
const imgRatio2 = img2.naturalWidth / img2.naturalHeight;
const imgRatioCloud = cloud.naturalWidth / cloud.naturalHeight;


const W = ctx.canvas.width;
const H = ctx.canvas.height;


perso = new Gorvenal(250, 350, 150, 150 / imgRatio1, img1, 600);
perso2 = new Cyborg(1200, 300, 200, 200 / imgRatio2, img2, 750);

cloud1 = new Clouds(cloud, 10, 90, 280, 280 / imgRatioCloud)
cloud2 = new Clouds(cloud, 1000, 140, 130, 130 / imgRatioCloud)
cloud3 = new Clouds(cloud, 1400, 90, 220, 220 / imgRatioCloud)
cloud4 = new Clouds(cloud, 900, 140, 80, 80 / imgRatioCloud)

// cloud5 = new Clouds(cloudBis, 10, 130, 220, 220 / imgRatioCloud)


// function startGame() {

//     perso1 = new Gorvenal();
//     perso2 = new Cyborg();

// }

// startGame();





controller = {
    left: false,
    right: false,
    up: false,
    attack: false,
    left2: false,
    right2: false,
    up2: false,
    attack2: true,
    commands: false,
    keyListener: function (event) {

        var key_state = (event.type === "keydown") ? true : false;

        switch (event.keyCode) {
            case 81: // left key - Perso1
                controller.left = key_state;
                break;
            case 90: // up key - Perso1
                controller.up = key_state;
                break;
            case 68: // right key - Perso1
                controller.right = key_state;
                break;
            case 83: // LAUNCH ATTACK1 - Perso1
                controller.attack = key_state;

                break;
            case 37: // left key - Perso2
                controller.left2 = key_state;
                break;
            case 38: // up key - Perso2
                controller.up2 = key_state;
                break;
            case 39: // right key - Perso2
                controller.right2 = key_state;
                break;
            case 40: // LAUNCH ATTACK1 - Perso1
                controller.attack2 = key_state;
                break;
            case 16: // LAUNCH ATTACK1 - Perso1
                controller.commands = key_state;
                break;

        }


    }

}

function update() {

    //CONTROL PERSO 1
    // PersoLeft = false;
    // PersoRight = false;
    // Perso2Left = false;
    // Perso2Right = false;

    if (controller.up) {

        perso.jump()
    }




    if (controller.left) {


        perso.moveLeft();
        perso.img = img1_left
        directionPerso1 = 'left';

    }

    // // identifier sens personnage
    // if (perso.img = img1_left) {
    //     PersoLeft = true;

    // }

    if (controller.right) {

        perso.moveRight();
        perso.img = img1_right
        directionPerso1 = 'right';

    }

    // // identifier sens personnage
    // if (perso.img = img1_right) {
    //     PersoRight = true;

    // }

    if (controller.attack) {

        // let imgAttack = document.createElement('img');
        // imgAttack.src = "images/couteau.png";

        // ctx.drawImage(imgAttack, perso.x_attack, perso.y_attack, 96, 126);

        // perso.attack();

        // let bullet = new Bullet(perso.x, perso.y)
        // bullet.shoot();
        perso.attack()

    }

    perso.update();

    //CONTROL PERSO 2

    if (controller.up2) {

        perso2.jump()
    }

    if (controller.left2) {


        perso2.moveLeft();
        perso2.img = img2_left;
        directionPerso2 = 'left';


    }

    // //identifier direction personnage
    // if (perso2.img = img2_left) {
    //     Perso2Left = true;

    // }

    if (controller.right2) {

        perso2.moveRight();
        perso2.img = img2_right;
        directionPerso2 = 'right';


    }

    // //identifier direction personnage
    // if (perso2.img = img2_right) {
    //     Perso2Right = true;

    // }

    if (controller.attack2) {


        perso2.attack2();


        // RULE -> CHANGEMENT DE COULEUR DU PERSONNAGE PENDANT 8 SEC
        // PUIS ATTENDRE 15 SECONDES AVANT DE REAPPARAITRE 
        // SI AUTRE PERSONNAGE SAUTE, ARRËT DU POUVOIR 

    }


    if (controller.commands) {

        // AFFICHER COMMANDS
        let commands = document.querySelector('#commands')

        commands.style.display = "block";

    } else {

        commands.style.display = "none";
    }


    perso2.update();
    cloud1.update();
    cloud2.update();





    // COLLISION PERSONNAGES 

    // if (perso.y < perso2.x + perso2.w &&
    //     perso.x + perso.w > perso2.x &&
    //     perso.y < perso2.y + perso2.h &&
    //     perso.y + perso.h > perso2.y) {

    //     perso.x += 0.5;


    // } else {}

    // Si un personnage meurt, il s'envole et l'autre personnage se retrouve au milieu 
    if (perso.health <= 0) {
        perso.y += -100;

        setTimeout(function () {
            perso2.img = img2;
            perso2.x = 800;



            setTimeout(function () {
                perso2.y += -100






            }, 3000);


        }, 4000);


    } else {}

    if (perso2.health <= 0) {
        perso2.y += -100


        setTimeout(function () {
            perso.img = img1;
            perso.x = 800;


            setTimeout(function () {
                perso.y += -100
            }, 3000);




        }, 4000);
    } else {}

}

function draw() {
    ctx.clearRect(0, 0, W, H);

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


    cloud1.drawRight()
    cloud2.drawRight()
    cloud3.drawLeft()
    cloud4.drawLeft()
    // cloud5.drawRight()

    ctx.beginPath();
    ctx.drawImage(montain, 0, 350);
    ctx.closePath();

    perso.draw();
    perso2.draw();

    perso.attack()
    perso2.attack2()
    // let bullet = new Bullet(perso2.x, perso.y);
    // bullet.bullet()



}


loop = function () {

    update()
    draw()

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

// LAUNCH THE GAME 

document.getElementById("start").onclick = function () {
    startGame();
};


function startGame() {



    // Put vent listener here 


}

document.querySelector('#start-game').classList.toggle('active')
document.querySelector('#game-board').classList.toggle('active')
document.querySelector('.health').classList.toggle('active')

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);