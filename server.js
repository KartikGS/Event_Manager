const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const path= require('path');

var publicDir=path.join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const connectDB = require('./config/db');
connectDB();

app.set('view engine', 'ejs')

const homeRouter =require('./routes/home')
const newUserRouter =require('./routes/new_user');
const addEventRouter =require('./routes/add_event');
const loginRouter =require('./routes/login');
const updateRouter =require('./routes/update');

app.use('/',homeRouter)
app.use('/new_user', newUserRouter)
app.use('/add_event', addEventRouter)
app.use('/login', loginRouter)
app.use('/update', updateRouter)

app.listen(port, () => console.log(`Server has started  on port : ${port}`))