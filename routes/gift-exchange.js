const express = require('express');
const router = express.Router()
const giftExchange = require("../models/gift-exchange");
const { BadRequestError } = require('../utils/errors');

const obj = {
    namesG: ["me", "you", "them", "us", "her", "him", "they", "y'all"]
}


router.get('/', async(req,res) => {
        res.status(200);
        // const body = req.params.body
        // console.log(body.names)
        res.json('aloye')
    })

router.post('/pairs', async(req,res,next) => {
    try {
        let names = req.body.names
        if (!names || names.length < 2){throw new BadRequestError()}
        let data = giftExchange.pairs(names)
        res.status(200).json(data)
    }
    catch(error) {
        next(error)
    }
    })

router.post('/traditional', async(req,res,next) => {
    try {
        let names = req.body.names
        if (!names || names.length < 2){throw new BadRequestError()}
        let data = giftExchange.traditional(names)
        res.status(200).json(data)
    }
    catch(error) {
        next(error)
    }
})

module.exports = router;