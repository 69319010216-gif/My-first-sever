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


<title>🌌 Galaxy Server | Team Portal</title>


<style>


*{

    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', 'Helvetica Neue', sans-serif;

}



body{

    height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

    color:white;

    background: linear-gradient(135deg, #0a0015 0%, #1a0033 25%, #2d0052 50%, #1a0033 75%, #0a0015 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;

}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}



/* Advanced Stars Background */

body::before{

    content:"";

    position:fixed;

    top:0;
    left:0;

    width:100%;

    height:100%;

    background-image:
    radial-gradient(2px 2px at 20% 30%, #eaacff, rgba(255,255,255,0)),
    radial-gradient(2px 2px at 60% 70%, #b4a7ff, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 50% 50%, #ffffff, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 80% 10%, #c084fc, rgba(255,255,255,0)),
    radial-gradient(2px 2px at 90% 60%, #a78bfa, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 30% 80%, #ffffff, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 15% 40%, #d8b4fe, rgba(255,255,255,0));

    background-repeat: repeat;
    background-size: 200% 200%;
    animation: stars 20s linear infinite;

    opacity: 0.6;
    z-index: 0;
    pointer-events: none;

}



@keyframes stars{

    from{

        transform: translateY(0) translateX(0);

    }

    to{

        transform: translateY(-200px) translateX(50px);

    }

}



/* Main Container */

.container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}



/* Card */

.card{

    position:relative;

    z-index:2;

    width: 100%;
    max-width: 550px;

    padding: 50px 45px;

    text-align:center;

    border-radius: 40px;

    background: rgba(255,255,255,0.08);

    backdrop-filter: blur(30px);

    border: 2px solid rgba(255,255,255,.2);

    box-shadow:
    0 0 50px rgba(192, 132, 252, 0.4),
    0 0 100px rgba(147, 51, 234, 0.2),
    inset 0 0 50px rgba(168,85,247,.15);

    transition: all 0.3s ease;
    animation: cardFloat 3s ease-in-out infinite;

}

.card:hover {
    transform: translateY(-5px);
    box-shadow:
    0 0 60px rgba(192, 132, 252, 0.6),
    0 0 120px rgba(147, 51, 234, 0.3),
    inset 0 0 50px rgba(168,85,247,.2);
}

@keyframes cardFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}



/* Header Section */

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}



/* ดาวเคราะห์ */

.planet{

    font-size: 85px;

    animation: float 4s infinite ease-in-out;

    display: inline-block;

}



@keyframes float{

    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }

}



h1{

    font-size: 42px;

    color:#f3e8ff;

    text-shadow:
    0 0 15px #d8b4fe,
    0 0 35px #9333ea,
    0 0 60px rgba(147, 51, 234, 0.5);

    letter-spacing: 2px;
    font-weight: 700;

}

h1 span {
    background: linear-gradient(135deg, #c084fc, #e879f9, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}



p.subtitle{

    font-size: 20px;

    color:#e9d5ff;

    font-weight: 300;
    letter-spacing: 0.5px;

}



/* Info Section */

.info{

    margin-top: 30px;

    padding: 25px;

    border-radius: 25px;

    background: rgba(255,255,255,.06);

    border: 1px solid rgba(255,255,255,.1);
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;
    gap: 18px;

}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.info-item .label {
    font-size: 14px;
    color: #c4b5fd;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.info-item .value {
    font-size: 18px;
    color: #f3e8ff;
    font-weight: 700;
    background: linear-gradient(135deg, #c084fc, #e879f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}



/* Status Badge */

.status{

    margin-top: 25px;

    padding: 16px 30px;

    border-radius: 50px;

    background: linear-gradient(90deg, #7e22ce 0%, #d946ef 50%, #7e22ce 100%);
    background-size: 200% 200%;
    animation: statusPulse 2s ease infinite;

    box-shadow: 0 0 30px rgba(217, 70, 239, 0.6);

    font-weight: 700;

    letter-spacing: 1.5px;
    font-size: 16px;
    transition: all 0.3s ease;

}

.status:hover {
    box-shadow: 0 0 50px rgba(217, 70, 239, 0.8);
}

@keyframes statusPulse {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}



/* Team Badge */

.team-badge {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    border-radius: 50px;
    background: rgba(147, 51, 234, 0.2);
    border: 1.5px solid rgba(192, 132, 252, 0.5);
    color: #d8b4fe;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    animation: badgeGlow 2s ease-in-out infinite;
}

@keyframes badgeGlow {
    0%, 100% { box-shadow: 0 0 15px rgba(192, 132, 252, 0.3); }
    50% { box-shadow: 0 0 25px rgba(192, 132, 252, 0.6); }
}



/* Footer */

.footer{

    margin-top: 30px;

    color:#a78bfa;

    font-size: 14px;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

}

.footer .divider {
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c084fc, transparent);
}



/* Responsive */

@media (max-width: 600px) {

    .card {
        width: 90%;
        padding: 40px 30px;
    }

    h1 {
        font-size: 28px;
    }

    .planet {
        font-size: 60px;
    }

    p.subtitle {
        font-size: 16px;
    }

}



</style>


</head>



<body>



<div class="container">

<div class="card">

<div class="header">

<div class="planet">🌌</div>

<h1>GALAXY <span>SERVER</span></h1>

<p class="subtitle">🚀 Welcome To Our Team</p>

</div>



<div class="info">

<div class="info-item">
    <span class="label">👨‍🚀 Creator</span>
    <span class="value">นายภคนันท์ จันทร์ทอง</span>
</div>

<div class="info-item">
    <span class="label">🆔 Student ID</span>
    <span class="value">69319010216</span>
</div>

</div>



<div class="team-badge">✨ JOIN GALAXY TEAM ✨</div>

<div class="status">🌟 SERVER ONLINE 🌟</div>



<div class="footer">

<div class="divider"></div>

<span>🌙 Node.js | Railway | Space System 🌙</span>

<span style="font-size: 12px; opacity: 0.7;">Powered by Galaxy Team 🚀</span>

</div>

</div>

</div>



</body>


</html>


    `);

});



// เปิด Server

server.listen(port, () => {


    console.log(`

🌌 Galaxy Server Online 🚀

เปิดใช้งาน Port : ${port}

    `);


});
