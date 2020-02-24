import http from 'http';
import fs from 'fs';
import path from 'path'

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'content-Type': 'text/html; charset=utf-8',
    });

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (error, buffer) => {
          if (error) {
            throw error;
          }

          res.end(Buffer.from(buffer));
        },
      )
    } else if (req.url === '/about') {
      fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (error, buffer) => {
          if (error) {
            throw error;
          }

          res.end(Buffer.from(buffer));
        },
      )
    } else if (req.url === '/api/users') {
      res.writeHead(200, {
        'Content-type': 'text/json'
      })

      const users = [
        {name: 'elena', age: '23'}
      ]

      res.end(JSON.stringify(users))
    }
  } else if (req.method === 'POST') {

    if (req.url === '/') {
      const body = [];
    }
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Your server available at http://localhost:${PORT}`);
});
