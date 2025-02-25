const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId = null;

const startChangingColor = function () {
    if (intervalId !== null) return; // Prevent multiple intervals
    intervalId = setInterval(changeBgColor, 1000);
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
};

function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
