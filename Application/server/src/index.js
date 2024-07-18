const express = require('express');
const app = express();

require('dotenv').config();
require('./db');

const notesRouter = require("./routers/notes.router.js")
const userRouter = require("./routers/users.router.js");
const authRouter = require("./routers/auth.router.js");

app.get('/',(req, res)=>{
    res.send("Hello CipherSchools!")
});

app.use('/api/notes', notesRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT,() =>{
    console.log('Server is running at 3001 port')
});
