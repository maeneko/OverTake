const remote = require('electron').remote
function Exit() {
    let w = remote.getCurrentWindow()
    w.close()
}
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
function rand(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let x = 0;
let y = rand(0, 780);
let x2 = 0;
let y2 = rand(200, 780);
let x3 = 0;
let y3 = rand(500, 780);

function Update() {
    ctx.clearRect(0,0,1280,800);
    ctx.fillStyle = "#29e317";
    ctx.fillRect(x, y, 20, 20);
    ctx.fillRect(x2, y2, 20, 20);
    ctx.fillRect(x3, y2, 20, 20);
        x += 20;
        x2 += 20;
        x3 += 20;
    if (x == 1280) {
        y = rand(0, 780);
        x = 0;
    }
    if (x2 == 1280) {
        y2 = rand(0, 780);
        x2 = 0;
    }
    if (x3 == 1280) {
        y3 = rand(0, 780);
        x3 = 0;
    }
}
setInterval(Update, 1000/ 60);