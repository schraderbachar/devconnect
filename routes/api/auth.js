const express = require('express')

const router = express.Router()


//@route   GET api/auth
//@Desc    route
//@access public
router.get('/', (req, res) => {
    res.send('auth route')
})




module.exports = router