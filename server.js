const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();

    let rows = "";

    result.rows.forEach(row => {
      rows += `
      <tr>
        <td>${row.student_id}</td>
        <td>${row.student_name}</td>
      </tr>`;
    });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Galaxy Student Database</title>

<style>

/* ===========================
   Spaceship
=========================== */

.spaceship{

position:fixed;

width:170px;
height:85px;

left:-220px;
top:18%;

z-index:-1;

animation:
fly 45s linear infinite,
floatShip 5s ease-in-out infinite;

filter:
drop-shadow(0 0 20px #c66bff)
drop-shadow(0 0 50px #8d2bff);

opacity:.95;

}

@keyframes fly{

0%{

left:-250px;
transform:translateY(0) rotate(3deg);

}

50%{

transform:translateY(-35px) rotate(-2deg);

}

100%{

left:110%;
transform:translateY(20px) rotate(4deg);

}

}

@keyframes floatShip{

0%,100%{

margin-top:0;

}

50%{

margin-top:-18px;

}

}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{

overflow:hidden;
background:#05010d;
color:white;

}

/* Canvas */
#space{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-2;
}

/* Nebula */

.nebula{

position:fixed;
width:120vw;
height:120vh;

background:
radial-gradient(circle at 20% 30%,rgba(140,0,255,.35),transparent 30%),
radial-gradient(circle at 80% 60%,rgba(255,0,255,.2),transparent 35%),
radial-gradient(circle at 50% 50%,rgba(80,0,180,.3),transparent 40%);

filter:blur(60px);

animation:moveNebula 20s linear infinite alternate;

z-index:-1;

}

@keyframes moveNebula{

0%{
transform:translate(-5%,-5%);
}

100%{
transform:translate(5%,5%);
}

}

/* Glass */

.container{

width:90%;
max-width:900px;

margin:60px auto;

padding:30px;

border-radius:25px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(20px);

box-shadow:
0 0 40px rgba(162,0,255,.45),
0 0 80px rgba(80,0,255,.2);

animation:fade .8s;

}

@keyframes fade{

from{
opacity:0;
transform:translateY(50px);
}

to{
opacity:1;
transform:none;
}

}

h1{

text-align:center;
font-size:40px;

margin-bottom:25px;

background:linear-gradient(90deg,#fff,#e48cff,#8f5fff);

-webkit-background-clip:text;
-webkit-text-fill-color:transparent;

}

/* Table */

table{

width:100%;
border-collapse:collapse;

overflow:hidden;

border-radius:15px;

}

th{

background:#7c2cff;
padding:15px;

}

td{

padding:15px;
text-align:center;

background:rgba(255,255,255,.05);

transition:.35s;

}

tr:hover td{

background:rgba(160,80,255,.25);

transform:scale(1.02);

}

/* Planet */

.planet{

position:fixed;

right:50px;
top:40px;

width:170px;
height:170px;

border-radius:50%;

background:
radial-gradient(circle at 30% 30%,#f7d2ff,#8a2eff,#250042);

box-shadow:

0 0 70px #a700ff,
0 0 120px #8d00ff;

animation:rotatePlanet 30s linear infinite;

}

@keyframes rotatePlanet{

from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg);
}

}

/* Shooting */

.shoot{

position:fixed;

width:2px;
height:120px;

background:linear-gradient(white,transparent);

transform:rotate(45deg);

animation:shoot 5s linear infinite;

opacity:.7;

}

@keyframes shoot{

0%{

left:-10%;
top:-10%;
opacity:0;

}

20%{

opacity:1;

}

100%{

left:120%;
top:120%;
opacity:0;

}

}

</style>
</head>

<body>

<canvas id="space"></canvas>

<div class="nebula"></div>

<div class="planet"></div>

<div class="shoot"></div>

<div class="container">

<h1>🌌 ฐานข้อมูลนักศึกษา</h1>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>

${rows}

</table>

</div>

<script>

const canvas=document.getElementById("space");
const ctx=canvas.getContext("2d");

let w,h;

function resize(){

w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;

}

resize();

window.onresize=resize;

let stars=[];

for(let i=0;i<400;i++){

stars.push({

x:Math.random()*w,

y:Math.random()*h,

r:Math.random()*2,

dx:(Math.random()-0.5)*0.15,

dy:(Math.random()-0.5)*0.15

});

}

let mouse={x:w/2,y:h/2};

window.addEventListener("mousemove",e=>{

mouse.x=e.clientX;
mouse.y=e.clientY;

});

function animate(){

ctx.clearRect(0,0,w,h);

stars.forEach(s=>{

s.x+=s.dx;
s.y+=s.dy;

if(s.x<0)s.x=w;
if(s.x>w)s.x=0;
if(s.y<0)s.y=h;
if(s.y>h)s.y=0;

const px=s.x+(mouse.x-w/2)*0.015;
const py=s.y+(mouse.y-h/2)*0.015;

ctx.beginPath();
ctx.arc(px,py,s.r,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

</script>

</body>
</html>
`);

  } catch (err) {
    console.error(err);

    res.end(`
    <h1 style="color:red">❌ เกิดข้อผิดพลาด</h1>
    <p>${err.message}</p>
    `);
  }
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
