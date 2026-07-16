// Node.js Web Server - Cyber Style 🚀

const http = require('http');

const port = process.env.PORT || 3000;

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

        <title>Server Status</title>

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
                background:
                radial-gradient(circle at top,#1e293b,#020617);
                color:white;
            }

            .card{
                width:450px;
                padding:40px;
                text-align:center;
                border-radius:25px;

                background:rgba(255,255,255,0.08);
                backdrop-filter:blur(15px);

                border:1px solid rgba(255,255,255,0.2);

                box-shadow:
                0 0 30px rgba(0,255,255,0.3);
            }

            .icon{
                font-size:60px;
                margin-bottom:20px;
            }

            h1{
                font-size:28px;
                color:#22d3ee;
                text-shadow:
                0 0 10px #22d3ee;
            }

            p{
                margin-top:15px;
                color:#cbd5e1;
                font-size:18px;
            }

            .status{
                margin-top:25px;
                padding:12px;
                border-radius:20px;

                background:#16a34a;
                box-shadow:
                0 0 20px #16a34a;

                font-weight:bold;
            }

            .footer{
                margin-top:25px;
                font-size:13px;
                color:#94a3b8;
            }

        </style>

    </head>

    <body>

        <div class="card">

            <div class="icon">
                ⚡🖥️
            </div>

            <h1>
                WEB SERVER ONLINE
            </h1>

            <p>
                สวัสดีครับ! 👋<br>
                Web Server ของ<br>
                <b>ภคนันท์ จันทร์ทอง</b>
            </p>

            <p>
                รหัสนักศึกษา : <b>69319010216</b>
            </p>

            <div class="status">
                ✅ SERVER RUNNING SUCCESS
            </div>

            <div class="footer">
                🚀 Powered by Node.js + Railway
            </div>

        </div>

    </body>
    </html>
    `);

});


server.listen(port, () => {

    console.log(
        `🔥 Server Online : Port ${port}`
    );

});
