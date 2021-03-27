class Gorvenal {
    constructor() {


        this.x = 250;
        this.y = 350;


        this.jumping = true;
        this.x_velocity = 0;
        this.y_velocity = 0;

        const img = document.createElement('img');

        img.onload = () => {
            // 11:12:10
            this.img = img;

            const imgRatio = img.naturalWidth / img.naturalHeight;


            this.w = 200;
            this.h = this.w / imgRatio;

            // this.x = W / 2 - this.w / 2;
            // this.y = H - this.h - 100;

            this.draw()


        }
        img.src = "images/character-1.png";

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
            this.y_velocity -= 20;
            this.jumping = true;
        }


    }

}


class Cyborg extends Gorvenal {

    constructor(x, y, jumping, y_velocity, x_velocity) {


        super(x, y, jumping, y_velocity, x_velocity)

        const img2 = document.createElement('img');

        img2.src = "images/character-2.png";

        this.img = img2;

        this.draw()
    }



}