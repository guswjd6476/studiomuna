const express = require('express');
const http = require('http');
const next = require('next');

const dev = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 5001;
const app = next({ dev, port });
const handle = app.getRequestHandler();
const cors = require('cors');

const users = [
    { username: 'aaaa', password: 'aaaa' },
    { username: 'admin', password: 'password' },
];

let corsOptions = {
    origin: '*', // 출처 허용 옵션
    credentials: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};
app.prepare().then(() => {
    const server = express();
    server.use(cors(corsOptions));
    server.use(express.json());

    server.get('/', (req, res) => {
        return app.render(req, res, '/');
    });

    server.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        console.log('!!!!!!!');
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${port}`);
    });
});
