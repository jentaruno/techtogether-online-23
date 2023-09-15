const express = require('express');
const cors = require('cors');
const {API_LINKS, DB_LINKS} = require('./config');

const app = express();
app.use(cors());

Object.keys(API_LINKS).forEach(routeName => {
    const {link, router} = API_LINKS[routeName];
    app.use('/api' + link, router);
});
Object.keys(DB_LINKS).forEach(routeName => {
    const {link, router} = DB_LINKS[routeName];
    app.use('/db' + link, router);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080'));