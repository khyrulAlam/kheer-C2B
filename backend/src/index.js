require('dotenv').config({path: '.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();


server.start({
    cors: {
        credential: true,
        origin: process.env.FRONTEN_URL
    }
}, deets => {
    console.log(`server is running on http://localhost:${deets.port}`)
})