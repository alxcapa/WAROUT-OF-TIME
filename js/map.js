class Clouds {


    constructor(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        // velocity
        this.x_velocity = 0;
        this.y_velocity = 0;


    }


    drawRight() {


        if (!this.img) return; // if `this.img` is not loaded yet => don't draw
        let randomPosX = Math.random() * 0.07;
        let randomPosY = Math.random() * 0.01;


        for (let i = 0; i < 2; i++) {
            ctx.drawImage(cloud, this.x += randomPosX, this.y += randomPosY, this.w, this.h);

        }

    }


    drawLeft() {


        if (!this.img) return; // if `this.img` is not loaded yet => don't draw


        // let arrayCloud = [cloud, cloudBis]
        let randomPosX = Math.random() * 0.05;




        for (let i = 0; i < 2; i++) {
            ctx.drawImage(cloud, this.x -= randomPosX, this.y, this.w, this.h);

        }

    }


    update() {

        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9; // friction
        this.y_velocity *= 0.9; // friction


    }

}


class Birds {

    constructor() {

    }





}