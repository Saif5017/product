const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
    credentials: true,
  })
);

// const api = require('./api');

// app.get('/', api.getProducts);

// app.get('/:id', api.getContainerContents);

// app.get('/name/:name', api.containerLocate);

// app.post('/add', api.AddProducts);

// app.get('/container/list', api.displayContainers);

app.listen(port, () => {
  console.log('connected to port: ' + port);
});
