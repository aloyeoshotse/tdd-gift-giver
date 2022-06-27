const express = require('express');
const router = express.Router()

const obj = {
    names: []
}


router.get('/', async(req,res) => {
        res.status(200);
        // const body = req.params.body
        // console.log(body.names)
        res.json('hi')
    })

router.post('/pairs', async(req,res) => {
    res.status(200).json(obj);
    // const body = req.params.body
    // console.log(body.names)
})

router.post('/traditional', async(req,res) => {
    res.status(200).json(obj);
})

module.exports = router;