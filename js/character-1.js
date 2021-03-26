class Gorvenal {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;

            const imgRatio = img.naturalWidth / img.naturalHeight;


            this.w = 200;
            this.h = this.w / imgRatio;

            // this.x = W / 2 - this.w / 2;
            // this.y = H - this.h - 100;
            this.x = 250;
            this.y = 350;


            this.jumping = true;
            this.x_velocity = 0;
            this.y_velocity = 0;
            this.draw()


        }
        img.src = "images/character-1.png";

    }


    draw() {

        if (!this.img) return; // if `this.img` is not loaded yet => don't draw

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    }


    moveLeft() {
        console.log(this.x)



        this.x += -20;

    }
    moveRight() {
        console.log(this.x)

        this.x += 20;
    }

    moveUp() {

        this.draw()

        this.y += -20;

    }

    moveDown() {

        this.draw()

        this.y += 20;

    }

    jump() {



    }



}