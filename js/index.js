const prizeArr = [{
        bgColor: "red",
        color: "white",
        img: "",
        title: "10"
    },
    {
        bgColor: "orange",
        color: "white",
        img: "",
        title: "20"
    },
    {
        bgColor: "white",
        color: "black",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "white",
        img: "",
        title: "10"
    },
    {
        bgColor: "blue",
        color: "white",
        img: "",
        title: "30"
    },
    {
        bgColor: "white",
        color: "black",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "white",
        img: "",
        title: "10"
    },
    {
        bgColor: "orange",
        color: "white",
        img: "",
        title: "20"
    },
    {
        bgColor: "white",
        color: "black",
        img: "",
        title: "TRY AGAIN"
    },
    {
        bgColor: "red",
        color: "white",
        img: "",
        title: "10"
    },
    {
        bgColor: "blue",
        color: "white",
        img: "",
        title: "30"
    },
    {
        bgColor: "white",
        color: "black",
        img: "",
        title: "TRY AGAIN"
    },
];
const rand = (min, max) => Math.random() * (max - min) + min;
const tot = prizeArr.length;
const spin = document.querySelector("#btn");
const canv = document.querySelector("#wheel")
const ctx= canv.getContext('2d');
// canv.width=window.innerWidth
// canv.height =window.innerHeight
const dia = ctx.canvas.width;
const rad = dia /2;
const circle = 2 * Math.PI;
const stepAngle = circle / prizeArr.length;
let rotang = 360/tot
let angVel = 0; 
let ang = 0;
let i;
function getRandomNumber(min, max) {
        if (max === undefined)
            return Math.floor(Math.random() * (min));
        return Math.floor(Math.random() * (max - min) + min);
    };
    
function drawSector(sector, i) {
    const ang = stepAngle * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.bgColor;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + stepAngle);
    ctx.lineTo(rad, rad);
    ctx.fill();
    ctx.translate(rad, rad);
    ctx.rotate(ang + stepAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = sector.color;
    ctx.font = "bold 30px sans-serif";
    ctx.fillText(sector.title, rad - 10, 10);
    ctx.restore();
  };
  function rotate() {
    i=getRandomNumber(0,tot)

    ctx.canvas.style.transform = `rotate(${stepAngle*i}rad)`;
   console.log(i);
  }
  function frame() {
    if (!angVel) return;
    angVel *= 0.9; 
    if (angVel < 0.002) angVel = 0; 
    ang += angVel; 
    rotate();
  }
  function engine() {

    frame();
    requestAnimationFrame(engine)
  }

  prizeArr.forEach(drawSector)
  rotate()
  engine()
  spin.addEventListener("click",()=>{
      if (!angVel) angVel=rand(0.25,0.35) 
 

  }

  )