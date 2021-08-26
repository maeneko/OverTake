const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
function rand(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let FPS = 60;
let player = {
    x: 0,
    y: 0,
    speed: 20,

}
let ai = {
    x: rand(0, 58) * 20,
    y: rand(0,35) * 20,
    speed: 60,
    side: 0,
    running: 0,
}
let ai2 = {
    x: rand(0, 58) * 20,
    y: rand(0,35) * 20,
    speed: 60,
    side: 0,
    running: 0,
}

let rightPressed = false;
let leftPressed = false;
let UpPressed  = false;
let DownPressed = false;
//let side = 0; // 1 - Left; 2 - Right; 3 - Up; 4 - Down
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.code == "KeyD") {
        rightPressed = true;
        ai.running = 1//rand(0,1);
        ai2.running = 1//rand(0,1);
    }
    else if(e.code == "KeyA") {
        leftPressed = true;
        ai.running = 1//rand(0,1);
        ai2.running = 1//rand(0,1);
    }
    else if(e.code == "KeyW") {
        UpPressed = true;
        ai.running = 1//rand(0,1);
        ai2.running = 1//rand(0,1);
    }
    else if(e.code == "KeyS") {
        DownPressed = true;
        ai.running = 1//rand(0,1);
        ai2.running = 1//rand(0,1);
    }
}
function keyUpHandler(e) {
    if(e.code == "KeyD") {
        rightPressed = false;
    }
    else if(e.code == "KeyA") {
        leftPressed = false;

    }
    else if(e.code == "KeyW") {
        UpPressed = false;
    }
    else if(e.code == "KeyS") {
        DownPressed = false;
    }
}
function AI() {
    if (ai.running >= 1) {
        if (player.x < ai.x) {
            ai.side = 1;
        }
        if (player.x > ai.x) {
            ai.side = 2;
        }
        if (player.y < ai.y) {
            ai.side = 3;
        }
        if (player.y > ai.y) {
            ai.side = 4;
        }
        switch (ai.side) {
            case 1:
                ai.x -= ai.speed;
                ai.running = 0;
                break;
            case 2:
                ai.x += ai.speed;
                ai.running = 0;
                break;
            case 3:
                ai.y -= ai.speed;
                ai.running = 0;
                break;
            case 4:
                ai.y += ai.speed;
                ai.running = 0;
                break;
        }
    }
    if (ai2.running >= 1) {
        if (player.x < ai2.x) {
            ai2.side = 1;
        }
        if (player.x >= ai2.x) {
            ai2.side = 2;
        }
        if (player.y < ai2.y) {
            ai2.side = 3;
        }
        if (player.y > ai2.y) {
            ai2.side = 4;
        }
        switch (ai2.side) {
            case 1:
                ai2.x -= ai.speed;
                ai2.running = 0;
                break;
            case 2:
                ai2.x += ai.speed;
                ai2.running = 0;
                break;
            case 3:
                ai2.y -= ai.speed;
                ai2.running = 0;
                break;
            case 4:
                ai2.y += ai.speed;
                ai2.running = 0;
                break;
        }
    }
}
function Draw() {
    ctx.clearRect(0,0,1200,800);
    ctx.fillStyle = "#29e317";
    ctx.fillRect(player.x, player.y, 20, 20);
    ctx.fillStyle = "darkgrey";
    ctx.fillRect(ai.x, ai.y, 20, 20);
    ctx.fillRect(ai2.x, ai2.y, 20, 20);
}
function Update() {
        AI();
    if (player.x >= 1160) {
        player.x = 1160;
    }
    if (player.x <= 0) {
        player.x = 0;
    }
    if (player.y >= 700) {
        player.y = 700;
    }
    if (player.y <= 0) {
        player.y = 0;
    }
    if (player.x == ai.x && player.y == ai.y) {
        alert('Game Over');
        window.location.href = "index.html";
    }
    if (player.x == ai2.x && player.y == ai2.y) {
        alert('Game Over');
        window.location.href = "index.html";
    }
    Draw();
    if (leftPressed) {
        player.x -= player.speed;
    }
    if (rightPressed) {
        player.x += player.speed;
    }
    if (UpPressed) {
        player.y -= player.speed;
    }
    if (DownPressed) {
        player.y += player.speed;
    }
}
setInterval(Update, FPS);