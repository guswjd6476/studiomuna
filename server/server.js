const express = require('express');
const http = require('http');
const next = require('next');

const dev = process.env.NODE_ENV === 'development';
const port = 3000;
const app = next({ dev, port });
const handle = app.getRequestHandler();

// 예시용 사용자 정보
const users = [
    { username: 'aaaa', password: 'aaaa' },
    { username: 'admin', password: 'password' },
];

app.prepare().then(() => {
    const server = express();

    server.use(express.json());

    // /api/login 엔드포인트에 대한 로그인 처리
    server.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        console.log('!!!!!!!');
        // 간단한 예시: 사용자가 배열에 존재하는지 확인
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    });

    // Next.js의 페이지들에 대한 라우팅을 위한 핸들러 추가
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // 서버 리스닝
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${port}`);
    });
});
