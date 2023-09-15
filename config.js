const initRouter = require('./routes/init');

const API_LINKS = {
    // newUser: {
    //     link: '/users',
    //     router: newUserRouter
    // },
}

const DB_LINKS = {
    init: {
        link: '/init',
        router: initRouter
    },
}

module.exports = { API_LINKS, DB_LINKS };
