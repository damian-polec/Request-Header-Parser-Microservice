const path = require('path');
const http = require('http');
const express = require('express');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');

app.enable('trust proxy');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);