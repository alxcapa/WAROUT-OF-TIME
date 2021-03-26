class Cyborg {
    constructor() {
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;

            const imgRatio = img.naturalWidth / img.naturalHeight;


            this.w = 200;
            this.h = this.w / imgRatio;

            // this.x = W / 2 - this.w / 2;
            // this.y = H - this.h - 100;
            this.x = 1250;
            this.y = 430;

            this.draw()
        }
        img.src = "images/character-2.png";

    }

    draw() {

        if (!this.img) return; // if `this.img` is not loaded yet => don't draw

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    }

    moveLeft() {
        this.x += -20;
    }
    moveRight() {
        this.x += 20;
    }
}