// 🌌 Galaxy Node.js Web Server 🚀

const http = require('http');

const port = process.env.PORT || 3000;


// สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader(
        'Content-Type',
        'text/html; charset=utf-8'
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
    font-family:'Segoe UI', 'Courier New', sans-serif;

}


body{

    height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

    color:white;

    background: #000814;

    position: relative;

}


/* Animated Stars Background */

body::before{

    content:"";

    position:fixed;

    width:100%;

    height:100%;

    top:0;

    left:0;

    background-image:

    radial-gradient(circle,#ffffff 2px,transparent 3px),

    radial-gradient(circle,#c084fc 1.5px,transparent 2px),

    radial-gradient(circle,#a78bfa 1px,transparent 2px);

    background-size:

    150px 150px,

    220px 220px,

    90px 90px;

    background-position: 0 0, 50px 50px, 25px 25px;

    animation:stars 60s linear infinite;

    opacity:.6;

    z-index:1;

}


@keyframes stars{

    from{

        transform:translateY(0);

    }

    to{

        transform:translateY(-400px);

    }

}


/* Nebula Gradient Background */

body::after{

    content:"";

    position:fixed;

    width:100%;

    height:100%;

    top:0;

    left:0;

    background: 

    radial-gradient(ellipse at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),

    radial-gradient(ellipse at 80% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),

    radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);

    pointer-events: none;

    z-index:1;

}


/* Card Container */

.card{

    position:relative;

    z-index:2;

    width:500px;

    padding:50px;

    text-align:center;

    border-radius:25px;

    background: rgba(15, 23, 42, 0.8);

    backdrop-filter: blur(30px);

    border: 2px solid rgba(168, 85, 247, 0.4);

    box-shadow:

    0 0 50px rgba(147, 51, 234, 0.5),

    0 0 100px rgba(236, 72, 153, 0.3),

    inset 0 0 40px rgba(168, 85, 247, 0.2);

    animation: cardFloat 4s ease-in-out infinite;

}


@keyframes cardFloat{

    0%, 100%{

        transform: translateY(0px);

    }

    50%{

        transform: translateY(-20px);

    }

}


/* Planet Emoji */

.planet{

    font-size:85px;

    animation: planetRotate 8s linear infinite;

    display: inline-block;

}


@keyframes planetRotate{

    from{

        transform: rotateY(0deg) rotateZ(-20deg);

    }

    to{

        transform: rotateY(360deg) rotateZ(-20deg);

    }

}


h1{

    margin-top:25px;

    font-size:36px;

    color:#f0f9ff;

    font-weight:700;

    letter-spacing:2px;

    text-shadow:

    0 0 15px rgba(147, 51, 234, 0.8),

    0 0 30px rgba(168, 85, 247, 0.5),

    0 0 45px rgba(236, 72, 153, 0.3);

}


.subtitle{

    margin-top:12px;

    font-size:16px;

    color:#e0e7ff;

    letter-spacing:1px;

    opacity:0.9;

}


.info{

    margin-top:35px;

    padding:25px;

    border-radius:18px;

    background: rgba(99, 102, 241, 0.1);

    border: 1px solid rgba(168, 85, 247, 0.3);

    backdrop-filter: blur(20px);

    box-shadow: inset 0 0 30px rgba(147, 51, 234, 0.1);

}


.info p{

    margin:12px 0;

    font-size:16px;

    color:#e9d5ff;

    line-height:1.8;

}


.info b{

    color:#f0f9ff;

    font-weight:700;

    font-size:18px;

    text-shadow: 0 0 10px rgba(147, 51, 234, 0.6);

}


.status{

    margin-top:30px;

    padding:18px 30px;

    border-radius:50px;

    background: linear-gradient(

        135deg,

        rgba(168, 85, 247, 0.6),

        rgba(236, 72, 153, 0.6)

    );

    border: 1.5px solid rgba(248, 113, 113, 0.5);

    box-shadow:

    0 0 30px rgba(236, 72, 153, 0.6),

    inset 0 0 20px rgba(255, 255, 255, 0.1);

    font-weight:bold;

    letter-spacing:2px;

    font-size:16px;

    animation: statusPulse 2s ease-in-out infinite;

}


@keyframes statusPulse{

    0%, 100%{

        box-shadow:

        0 0 30px rgba(236, 72, 153, 0.6),

        inset 0 0 20px rgba(255, 255, 255, 0.1);

    }

    50%{

        box-shadow:

        0 0 50px rgba(236, 72, 153, 0.8),

        inset 0 0 30px rgba(255, 255, 255, 0.2);

    }

}


.footer{

    margin-top:30px;

    color:#a5b4fc;

    font-size:14px;

    letter-spacing:0.5px;

    opacity:0.8;

}


/* Responsive */

@media (max-width: 600px){

    .card{

        width:90%;

        padding:35px;

    }

    h1{

        font-size:28px;

    }

    .planet{

        font-size:70px;

    }

}


</style>


</head>


<body>


<div class="card">

    <div class="planet">🌌</div>

    <h1>GALAXY WEB</h1>
    <p class="subtitle">SERVER ONLINE 🚀</p>

    <div class="info">

        <p>👨‍🚀 ผู้จัดทำ<br><b>นายรพีพัทธ์ เจริญรัญวุฒิกุล</b></p>

        <p style="margin-top:18px;">🆔 รหัสนักศึกษา<br><b>123456789</b></p>

    </div>

    <div class="status">
        ✨ SERVER ACTIVE ✨
    </div>

    <div class="footer">
        🌙 Powered by Node.js | Railway | Space Technology 🛸
    </div>

</div>

</body>

</html>

    `);

});


// เปิด Server

server.listen(port, () => {

    console.log(\`

🌌 Galaxy Server Online 🚀

เปิดใช้งาน Port : \${port}

    \`);

});
