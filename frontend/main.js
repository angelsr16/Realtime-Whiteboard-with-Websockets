const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const uid = generateRandomId(10);
const colorInput = document.getElementById('colorInput')

let isDrawing = false;
let lastX, lastY;
let color = '#000';


websocket = new WebSocket("http://localhost:8000/ws/canvas");

websocket.onmessage = (event) => {
    json_data = JSON.parse(event.data);

    if (json_data.uid !== uid) {
        canvasContext.beginPath();
        canvasContext.strokeStyle = json_data.color
        canvasContext.lineWidth = 3;
        canvasContext.moveTo(json_data.lastX, json_data.lastY);
        canvasContext.lineTo(json_data.x, json_data.y);
        canvasContext.stroke();
        canvasContext.beginPath();
    }
}

colorInput.addEventListener('input', function (evt) {
    color = evt.target.value
});


let oldX = window.screenX;
let oldY = window.screenY;


const checkPosition = () => {
    // console.log({ x: window.outerWidth, y: window.outerHeight })
    console.log(window.inner);


    if (oldX !== window.screenX || oldY !== window.screenY) {
        console.log('Browser window was moved!');
        oldX = window.screenX;
        oldY = window.screenY;
        console.log({ oldX, oldY });
    }
};

setInterval(checkPosition, 100);

canvasContext.beginPath();
centerX = canvas.clientWidth / 2;
centerY = canvas.clientHeight / 2;
canvasContext.arc(centerX, centerY, 20, 0, 2 * Math.PI);
canvasContext.fill()
canvasContext.stroke(); // Or ctx.fill() for a filled circle

// canvas.addEventListener("mousedown", startDrawing, false);
// canvas.addEventListener("mousemove", draw, false);
// canvas.addEventListener("mouseup", stopDrawing, false);

// function startDrawing(e) {
//     isDrawing = true;
//     lastX = e.clientX - canvas.offsetLeft;
//     lastY = e.clientY - canvas.offsetTop;
//     canvasContext.beginPath();
//     canvasContext.moveTo(lastX, lastY);
// }

// function draw(e) {
//     if (!isDrawing) return;
//     var x = e.clientX - canvas.offsetLeft;
//     var y = e.clientY - canvas.offsetTop;
//     canvasContext.strokeStyle = color
//     canvasContext.lineWidth = 3;
//     websocket.send(JSON.stringify({ x: x, y: y, uid: uid, lastX: lastX, lastY: lastY, color: color }))
//     canvasContext.lineTo(x, y);
//     canvasContext.stroke();
//     lastX = x;
//     lastY = y;
// }

// function stopDrawing() {
//     isDrawing = false;
//     canvasContext.stroke();
//     canvasContext.beginPath();
// }

function generateRandomId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}