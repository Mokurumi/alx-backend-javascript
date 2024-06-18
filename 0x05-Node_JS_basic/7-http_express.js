const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  const [, , databaseFileName] = process.argv;

  countStudents(databaseFileName)
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch(error => {
      res.status(500).send(`Error: ${error.message}\n`);
    });
});

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET ${req.originalUrl}</pre>
    </body>
    </html>
  `);
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
