const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const [, , databaseFileName] = process.argv;

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  if (pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (pathname === '/students') {

    countStudents(databaseFileName)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch(error => {
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
