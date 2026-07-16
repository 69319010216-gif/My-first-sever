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
    font-family:'Segoe UI',sans-serif;

}



body{

    height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

    color:white;


    background:

    radial-gradient(circle at top,#9333ea,#4c1d95,#020617);


}



/* กลุ่มดาว Background */

body::before{

    content:"";

    position:absolute;

    width:200%;

    height:200%;


    background-image:

    radial-gradient(circle,#ffffff 2px,transparent 3px),

    radial-gradient(circle,#c084fc 1px,transparent 2px),

    radial-gradient(circle,#ffffff 1px,transparent 2px);



    background-size:

    120px 120px,

    200px 200px,

    70px 70px;



    animation:stars 25s linear infinite;


    opacity:.7;

}



@keyframes stars{


    from{

        transform:translateY(0);

    }


    to{

        transform:translateY(-300px);

    }


}




/* Card */

.card{


    position:relative;

    z-index:2;


    width:460px;


    padding:45px;


    text-align:center;


    border-radius:35px;


    background:

    rgba(255,255,255,0.1);



    backdrop-filter:

    blur(20px);



    border:

    1px solid rgba(255,255,255,.25);



    box-shadow:


    0 0 40px #c084fc,

    inset 0 0 30px rgba(168,85,247,.3);



}




/* ดาวเคราะห์ */

.planet{


    font-size:75px;


    animation:

    float 3s infinite ease-in-out;


}



@keyframes float{


    50%{

        transform:translateY(-15px);

    }


}




h1{


    margin-top:20px;


    font-size:32px;


    color:#f3e8ff;



    text-shadow:


    0 0 10px #d8b4fe,

    0 0 30px #9333ea;


}



p{


    margin-top:15px;


    font-size:18px;


    color:#e9d5ff;



}




.status{


    margin-top:30px;


    padding:14px;


    border-radius:30px;



    background:


    linear-gradient(

    90deg,

    #7e22ce,

    #d946ef

    );



    box-shadow:


    0 0 25px #d946ef;



    font-weight:bold;


    letter-spacing:1px;


}




.info{


    margin-top:25px;


    padding:15px;


    border-radius:20px;



    background:

    rgba(255,255,255,.08);



}




.footer{


    margin-top:25px;


    color:#c4b5fd;


    font-size:14px;


}



</style>


</head>



<body>



<div class="card">


<div class="planet">

🌌

</div>



<h1>

GALAXY WEB SERVER

</h1>



<p>

🚀 Welcome To My Server

</p>



<div class="info">


<p>

👨‍🚀 ผู้จัดทำ

<br>

<b>
นายภคนันท์ จันทร์ทอง
</b>


</p>


<p>

🆔 รหัสนักศึกษา

<br>

<b>

69319010216

</b>


</p>


</div>



<div class="status">

✨ SERVER ONLINE ✨

</div>



<div class="footer">


🌙 Node.js | Railway | Space System


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
