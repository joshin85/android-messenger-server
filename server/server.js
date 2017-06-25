config = require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = config.PORT;

//Configure express
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/auth', require('./auth'));
app.use('/', require('./components'));

app.listen(port, function () {
  console.log(`App server listening on port ${port}`);
})