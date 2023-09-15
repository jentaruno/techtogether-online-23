const express = require('express');
const cors = require('cors');
const initRouter = require('./routes/init');
//const newUserRouter = require('./routes/newUser');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/init', initRouter);

app.listen(8080, () => console.log('API is running on http://localhost:8080'));