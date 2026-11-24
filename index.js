const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        bot: 'DARKZONE-MD',
        status: 'ONLINE',
        version: '1.0.0',
        uptime: process.uptime(),
        message: 'DARKZONE-MD is running!'
    }));
});

server.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━');
    console.log('🤖 DARKZONE-MD');
    console.log('✅ Bot Started');
    console.log(`🚀 Port: ${PORT}`);
    console.log('━━━━━━━━━━━━━━━━━━━━');
});
