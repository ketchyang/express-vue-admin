const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

require('./routes/admin')(app);
require('./plugins/db')(app);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
