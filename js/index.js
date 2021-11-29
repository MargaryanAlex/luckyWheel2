const spin = document.getElementById('btn');
const prizeBox = document.getElementById('prizebox');
const wheel = document.getElementById('wheel');
let spincount = document.getElementById('spincount');
let polygon
let value;
let step = 0;
let freeSpin = 5;
console.log(wheel);

const prizeArr = [{
        bgColor: "red",
        color: "",
        img: "",
        title: "10"
    },
    {
        bgColor: "orange",
        color: "",
        img: "",
        title: "20"
    },
    {
        bgColor: "white",
        color: "",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "",
        img: "",
        title: "10"
    },
    {
        bgColor: "blue",
        color: "",
        img: "",
        title: "30"
    },
    {
        bgColor: "white",
        color: "",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "",
        img: "",
        title: "10"
    },
    {
        bgColor: "orange",
        color: "",
        img: "",
        title: "20"
    },
    {
        bgColor: "white",
        color: "",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "",
        img: "",
        title: "10"
    },
    {
        bgColor: "blue",
        color: "",
        img: "",
        title: "30"
    },
    {
        bgColor: "white",
        color: "",
        img: "",
        title: "TRY AGAIN"
    },
];
let stepAngle = 360 / prizeArr.length;
let a = (stepAngle / 2);
let b = 90 - a;
let x = Math.abs(Math.sin(a * Math.PI / 180)) / Math.abs(Math.sin(b * Math.PI / 180)) * 127;
prizeArr.map((i, index) => {
    polygon = document.createElement("div");
    polygon.classList.add("polygon");
    wheel.append(polygon);
    polygon.style.backgroundColor = i.bgColor;
    polygon.style.transform = `rotate(${stepAngle*index}deg)`;
    polygon.innerHTML = `<div class="title" >${i.title} </div>`;
    polygon.style.clipPath=`polygon(${50+x}% 0, 50% 100%, ${50-x}% 0 )`;

});
function rotate() {
    let currentStep = getRandomNumber(0, prizeArr.length);
    console.log(currentStep);
    let currentAngle = currentStep * stepAngle

    console.log(currentAngle);
    spincount.innerHTML = freeSpin--;
    step += 5 * 360;
    prizeElement = document.createElement('div');
    prizeElement.innerHTML = prizeArr[currentStep].title;
    prizeElement.classList.add('box');
    wheel.style.transform = `rotate(${currentAngle+step}deg)`;
};
function getRandomNumber(min, max) {
    if (max === undefined)
        return Math.floor(Math.random() * (min));
    return Math.floor(Math.random() * (max - min) + min);
};
var locked = false;
spin.addEventListener('click', () => {
    if (locked) return;
    locked = true;
    freeSpin >= 0 ? rotate() : "";
    setTimeout(function () {
        prizeBox.append(prizeElement);
        locked = false;

    }, 2000);


});
spincount.innerHTML = freeSpin--;