const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js');
// const controllers = require('./controllers.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});