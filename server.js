const http = require("http");

const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader(
    "Content-Type",
    "text/html; charset=utf-8"
);
 

res.end(`

<!DOCTYPE html>

<html lang="th">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Galaxy Server</title>


<style>


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}


body{

    height:100vh;

    overflow:hidden;

    display:flex;

    justify-content:center;

    align-items:center;

    background:

    radial-gradient(circle at top,
    #c084fc,
    #581c87,
    #020617);

    color:white;

}



/* ดาว */

.space{

    position:absolute;

    width:100%;

    height:100%;

    overflow:hidden;

}


.star{

    position:absolute;

    width:4px;

    height:4px;

    background:white;

    border-radius:50%;

    box-shadow:

    0 0 10px white,

    0 0 20px #d8b4fe;

    animation:twinkle 3s infinite;

}



@keyframes twinkle{

    50%{

        opacity:.3;

        transform:scale(1.8);

    }

}





/* Cursor Glow */

.cursor{

    position:absolute;

    width:250px;

    height:250px;

    border-radius:50%;


    background:

    radial-gradient(
    circle,
    rgba(216,180,254,.35),
    transparent 70%
    );


    pointer-events:none;

    transform:translate(-50%,-50%);

}




/* Card */


.card{


    position:relative;

    z-index:5;


    width:480px;

    padding:45px;


    border-radius:35px;


    background:

    rgba(255,255,255,.08);



    backdrop-filter:

    blur(25px);



    border:

    1px solid rgba(255,255,255,.25);



    box-shadow:

    0 0 50px #c084fc;



    text-align:center;


    transition:.4s;


}



.card:hover{


    transform:

    translateY(-10px)

    rotateX(5deg);



    box-shadow:

    0 0 80px #e879f9;


}



.logo{


    font-size:80px;

    animation:

    float 3s infinite;


}



@keyframes float{


    50%{

        transform:translateY(-15px);

    }

}




h1{


    margin-top:15px;


    font-size:35px;


    color:#f5d0fe;


    text-shadow:

    0 0 20px #e879f9;


}



.subtitle{


    margin-top:10px;

    color:#ddd6fe;

    font-size:18px;


}



.box{


    margin-top:25px;


    padding:20px;


    border-radius:25px;



    background:

    rgba(255,255,255,.08);


}



.status{


    margin-top:25px;


    padding:15px;


    border-radius:50px;


    background:

    linear-gradient(
    90deg,
    #7e22ce,
    #ec4899
    );



    box-shadow:

    0 0 30px #ec4899;


    font-weight:bold;


}



.footer{


    margin-top:25px;

    color:#c4b5fd;


}



</style>


</head>



<body>


<div class="space" id="space"></div>


<div class="cursor" id="cursor"></div>



<div class="card" id="card">


<div class="logo">

🌌

</div>


<h1>

GALAXY SERVER

</h1>



<div class="subtitle">

🚀 Interactive Node.js Space System

</div>



<div class="box">


<p>

👨‍🚀 Developer

</p>


<h2>

นายรพีพัทธ์ เจริญรัญวุฒิกุล

</h2>


<br>


<p>

🆔 รหัสนักศึกษา

</p>


<h3>

123456789

</h3>


</div>



<div class="status">

✨ SERVER ONLINE ✨

</div>



<div class="footer">

🌙 Node.js • Railway • Galaxy Network

</div>


</div>





<script>


// สร้างดาว

const space =
document.getElementById("space");


for(let i=0;i<150;i++){


    let star=document.createElement("div");


    star.className="star";


    star.style.left=
    Math.random()*100+"%";


    star.style.top=
    Math.random()*100+"%";


    star.style.animationDelay=
    Math.random()*3+"s";


    let size=
    Math.random()*4+1;


    star.style.width=size+"px";

    star.style.height=size+"px";


    space.appendChild(star);

}




// ดาวขยับตามเมาส์

document.addEventListener(
"mousemove",

(e)=>{


let x =
(e.clientX/window.innerWidth-.5)*30;


let y =
(e.clientY/window.innerHeight-.5)*30;



space.style.transform =
`
translate(${x}px,${y}px)
`;



document.getElementById("cursor")
.style.left =
e.clientX+"px";


document.getElementById("cursor")
.style.top =
e.clientY+"px";



});





// Card 3D ตามเมาส์

const card =
document.getElementById("card");



document.addEventListener(
"mousemove",

(e)=>{


let x =
(e.clientX/window.innerWidth-.5)*10;


let y =
(e.clientY/window.innerHeight-.5)*10;


card.style.transform =
`
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});



</script>



</body>

</html>

`);

});



server.listen(port,()=>{

console.log(
`🌌 Galaxy Server Running : ${port}`
);

});
