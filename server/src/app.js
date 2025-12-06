const express  = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userAuthRouters = require('./routes/user.auth.routes')
const userDetailsRouters = require('./routes/user.details.routes')

const app = express();
app.use(cors({
    origin: ["http://localhost:5173" , "http://localhost:5174"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res)=> {
    res.send("Server is working");
})


app.use('/api/auth' , userAuthRouters);
app.use('/api/details' , userDetailsRouters);

module.exports = app;