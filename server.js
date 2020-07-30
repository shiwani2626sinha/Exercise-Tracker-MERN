const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./Routes/exercise')
const userRouter = require('./Routes/user')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

/*middleware*/
app.use(cors());
app.use(express.json()); //allow to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established")
})

app.use('/exercise', exerciseRouter)
app.use('/user', userRouter)

app.listen(port, () => { //start server
    console.log(`Server is running on port: ${port}`);

})
