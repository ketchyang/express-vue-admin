const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routers/admin');
const mongo = require('./plugins/mongo');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

router(app);
mongo(app);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
