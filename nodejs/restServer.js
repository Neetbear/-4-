const http = require("http");
const fs = require("fs").promises; // promises 개념으로 사용하겠다 -> async await로 가겠다 -> axios 모듈 사용하겠다

const host = '127.0.0.1';
const port = 3000;

const users = {}; // users 배열 생성

http.createServer(async (req, res) => { // async는 명시적으로 적음 nodejs에서 사실 콜백함수는 async임
    try {
        if (req.method === 'GET') { // get 조회
            if (req.url === '/') { // 요청의 url에 따라 창 변경할거니까 
                const data = await fs.readFile('./restFront.html'); 
                // 메인페이지 html읽어옴 await는 동기식처럼 보이게도 하지만 코드의 Promise fulfil을 잠시 중단하고, 결과를 반환하는 역할도 한다.
                // 만약 await 가 없으면 promise 값이 그대로 할당되서 할당된 변수를 읽지를 못한다. 
                // 에러코드 The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Promise
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // req에 대해 res 헤더를 보내는 ‘http’ 모듈의 내장 속성 statusCode, 써질 스타일 등등?
                return res.end(data); // writable.end() res에 적힐 내용이라고 할까 어떤게 드갈지를 마무리
            }
            else if (req.url === '/about') {
                const data = await fs.readFile('./about.html'); // 설명페이지보기
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(data);
            }
            else if (req.url === '/users') {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });   
                return res.end(JSON.stringify(users));
            }

            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(err.message);
            }
        }
        else if (req.method === 'POST') { // post 등록
            if (req.url === '/user') { // 등록과 수정, 삭제는 user에만 드간 기능이라 3개다 if문만 씀
                let body = '';
                // request body -> stream
                req.on('data', (data) => {
                    body += data;
                });
                // body after down execute
                return req.on('end', () => {
                    console.log('POST body:', body);
                    const { name } = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name; // key값에 시간값, value에 name값인 
                    res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end('ok');
                });
            }
        }
        else if (req.method === 'PUT') { // put 수정
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT body:', body);
                    users[key] = JSON.parse(body).name;
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    return res.end('ok');
                });
            }
        }
        else if (req.method === 'DELETE') { // delete 삭제
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end('ok');
            }
        }
        res.writeHead(404); // get, post, put, delete에 안걸리면 not found라고 띄워라
        return res.end('NOT FOUND')
    }
    catch (err) { // 애초에 req.method 조차 없으면 이쪽에서 에러로 잡겠다는거 보통 500번대 에러는 서버 스크립트 오류 or 서버 사용량폭주
        console.error(err); 
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err.message);
    };
}).listen(port, host, () => { // port host 없으면 에러 나올까?
    console.log(`Server running at http://${host}:${port}/`);
});