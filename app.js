// selected canvas selector
const canvas = document.querySelector("#jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

// mousemove event function
function onMouseMove(event) {
    // cansvas offset position
    // 캔버스 위치 값
    const x = event.offsetX;    
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

// be of canvas selector value. 
if( canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}