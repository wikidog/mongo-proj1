const express = require('express');

let app = express();

app.use((req, res, next) => {
  let now = new Date().toUTCString();
  console.log(`(${now}) ${req.method}  ${req.url}`);
  next();
})

app.use('/', express.static(__dirname + '/../'));

app.listen('3003', 'localhost', () => {
  console.log('server running ar http://localhost:3003/');
});

