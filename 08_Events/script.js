const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let colorChange;
function startChangingColor() {
    if (!colorChange) {
        colorChange = setInterval(changebgColor, 1000)
    }

    function changebgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor() {
    clearInterval(colorChange)
    colorChange = null;
}

document.querySelector('#start').addEventListener("click", startChangingColor)
document.querySelector('#stop').addEventListener("click", stopChangingColor)