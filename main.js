const ctx = document.querySelector("canvas").getContext("2d");
const montain = document.getElementById("montain");
const bird = document.getElementById("bird");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
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

    ctx.drawImage(montain, 0, 350);
    ctx.drawImage(bird, 50, 50);
    ctx.drawImage(bird, 400, 50, 40, 16);
    ctx.drawImage(bird, 800, 150);
}

draw();