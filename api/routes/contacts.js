const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json({
        message: 'Hello'
    });
})

router.post('/',(req,res,next)=>{
    res.json({
        status:"OK",
        message:'I am Post '
    })
});

router.get('/:id',(req,res,next)=>{
    const id = req.params.id ;
    res.json({
        id:id
    })
})

module.exports = router;