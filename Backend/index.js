require('dotenv').config();
const server = require('express');
const app = server()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student_greivance').then(() => { console.log("db connected") })
const { router } = require('./Routers/route.js');
const cors = require('cors');

// middleware
// const bodyparser = require('body-parser');

// app.use(cors())
// app.use(server.urlencoded({ extended: true }))
// app.use(server.json())
// app.use('/', router)
// app.use(bodyparser.urlencoded(encodeURI));
app.use(cors());
app.use(server.json());
const bodyparser = require('body-parser');
app.use(server.urlencoded({ extended: true }));
app.use('/api', router)
app.use(bodyparser.urlencoded(encodeURI));
app.get('/api/server', (req, res) => {
    res.send("server is runing on port 3000")
})
app.listen(3000, () => {
    console.log(`server is running on port number ${process.env.PORT}`)
})