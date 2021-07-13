var express = require ('express');
var router = express.Router();

router.post('/',(req, res)=>{
    res.send('se va a guardar');
});

///....


module.exports = router;