class Gorvenal {
    constructor(x, y, w, h, img, health) {

        //position
        this.x = x;
        this.y = y;

        this.x_attack = this.x;
        this.y_attack = this.y;

        this.w_couteau = 76;
        this.h_couteau = 106;

        // jump state
        this.jumping = true;



        // velocity
        this.x_velocity = 0;
        this.y_velocity = 0;

        //img
        this.img = img;

        //dimension
        this.w = w;
        this.h = h;

        //health
        this.health = health;

        // // draw image
        // this.draw()


    }


    draw() {

        if (!this.img) return; // if `this.img` is not loaded yet => don't draw

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    }


    update() {


        this.y_velocity += 1.5; // gravity
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9; // friction
        this.y_velocity *= 0.9; // friction



        // pour retomber sur la ligne
        if (this.y > 920 - 202 - 404) {

            this.jumping = false;
            this.y = 920 - 202 - 404;
            this.y_velocity = 0;

        }

        // Si en dehors du cadre
        if (this.x < -200) {

            this.x = 1750;

        } else if (this.x > 1750) {

            this.x = -200;

        }
    }


    moveLeft() {
        this.x_velocity -= 0.5;

    }
    moveRight() {
        this.x_velocity += 0.5;
    }

    jump() {
        if (this.jumping === false) {
            this.y_velocity -= 60;
            this.jumping = true;
        }
    }


    attack() {


        // let imgAttack = document.createElement('img');
        // imgAttack.src = "images/couteau.png";

        // ctx.drawImage(imgAttack, this.x_attack += 8, this.y_attack, this.w_couteau, this.h_couteau);



        // this.x_attack = this.x + this.w - 90;
        // this.y_attack = this.y + 90;


        if (controller.attack) {

            // ctx.beginPath();
            // ctx.arc(this.x_attack += i, this.y_attack, 10, 0, Math.PI * 2);
            // ctx.fillStyle = "red";
            // ctx.fill();
            // ctx.closePath();

            let imgAttackR = document.createElement('img');
            imgAttackR.src = "images/couteau-r.png";

            let imgAttackL = document.createElement('img');
            imgAttackL.src = "images/couteau-l.png";

            // Checking direction 
            if (direction === 'right') {
                ctx.drawImage(imgAttackR, this.x_attack += 8, this.y_attack, this.w_couteau, this.h_couteau);
            } else if (direction === 'left') {
                ctx.drawImage(imgAttackL, this.x_attack -= 8, this.y_attack, this.w_couteau, this.h_couteau);

            }

            // Collision couteau / perso2

            if (this.x_attack < perso2.x + perso2.w &&
                this.x_attack + this.w_couteau > perso2.x &&
                this.y_attack < perso2.y + perso2.h &&
                this.y_attack + this.h_couteau > perso2.y) {

                console.log('collision')
                //REDUCE LIFE ON LIFEBAR & HEALTHCLASS
                let healthPerso2 = document.getElementById("health-perso2")
                healthPerso2.value -= 0.2;
                perso2.health -= 0.2;

                //COUTEAU ATTACHE AU PERSO2    
                this.x_attack = perso2.x;

                //SI le personnage saute, le couteau s'en va
                if (perso2.jumping === true) {

                    this.x_attack = this.x + this.w - 90;
                    this.y_attack = this.y + 90;

                }
            }


        } else {
            this.x_attack = this.x + this.w - 90;
            this.y_attack = this.y + 90;

        }

        // controller.attack = false;



        // } else {}


    }

    // displayHealth()
    // {
    //     var life = document.createElement("div");
    //     life.innerHTML =`${this.health}`; 

    // }




}


class Cyborg extends Gorvenal {

    constructor(x, y, w, h, img, health) {


        super(x, y, w, h, img, health)

    }


    attack2() {


        if (controller.attack2 === true) {


            perso.y -= 5;
            perso.health -= 0.2;

            let healthPerso1 = document.getElementById("health-perso1")
            healthPerso1.value -= 0.2;


        }



    }
}




// class Bullet {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.x_attack = this.x;
//         this.y_attack = this.y;

//     }

//     shoot() {



//         if (controller.attack) {



//             ctx.beginPath();
//             ctx.arc(this.x_attack += 8, this.y_attack, 10, 0, Math.PI * 2);
//             ctx.fillStyle = "red";
//             ctx.fill();
//             ctx.closePath();


//         } else if (perso.x_attack === 1000) {
//             ctx.clearRect(this.x_attack, this.y_attack, 2 * Math.PI, 2 * Math.PI);

//         } else {
//             this.x_attack = this.x + this.w - 90;
//             this.y_attack = this.y + 90;

//         }


//         if (this.y_attack < perso2.x + perso2.w &&
//             this.x_attack + this.w_couteau > perso2.x &&
//             this.y_attack < perso2.y_attack + perso2.h &&
//             this.y_attack + this.h_couteau > perso2.y) {

//             let healthPerso2 = document.getElementById("health-perso2")
//             healthPerso2.value -= 0.2;
//             perso2.health -= 0.2;
//         } else {



//         }


//     }




// }