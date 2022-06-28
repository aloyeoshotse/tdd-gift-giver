const express = require('express');
const morgan = require('morgan');
const giftExchangeRouter = require("./routes/gift-exchange") 
const { NotFoundError } = require("./utils/errors")

const app = express();

app.use(morgan('tiny'));
app.use(express.json())
app.use("/gift-exchange", giftExchangeRouter)

app.route('/')
    .get(async(req,res) => {
    res.status(200).json({"ping":"pong"})
})

app.use((req,res,next) => {
    return next(new NotFoundError())
})


app.use((err,req,res,next) => {
    let status = err.status || 500
    let message = err.message || 'Something went wrong in the application'

    return res.status(status).json({
        error : {message, status}
    })
})

module.exports = app;