// selected canvas selector
const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

// mousemove event function
function onMouseMove(event) {
    // cansvas offset position
    // 캔버스 위치 값
    const x = event.offsetX;    
    const y = event.offsetY;

    // 마우스를 클릭하지 않고 움직이는 경우 path만 생성함.
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        console.log("creating path in ", x, y);
    } else {
        // 마우스 클릭 후 움직이는 경우
        console.log("creating Line in ", x, y);
        ctx.lineTo(x, y);
        ctx.stroke(); // 실제 이 메소드 호출 후 라인이 그려짐.
    }

}

function onMouseDown(event) {
    painting = true;
}

// be of canvas selector value. 
if( canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}