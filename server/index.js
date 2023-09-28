const express = require('express');
const cors = require('cors');
const cookieSession= require('cookie-session');
const passport = require('passport');
const authRoute = require('./routes/auth');
const passportConfig = require('./passport')


const app = express();

app.use(cookieSession(
    {
        name:'session',
        maxAge: 24 * 60 * 60 * 1000,
        keys: ['secret']
    }
))

app.use(passport.initialize())
app.use(passport.session())


app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,GET,HEAD,DELETE',
    credentials: true,
    
})
)


app.use('/auth' , authRoute)

app.listen('5000' , ()=>{
    console.log('Server is running on port 5000');
})