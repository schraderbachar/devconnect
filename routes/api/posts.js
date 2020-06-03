const express = require('express')

const router = express.Router()


//@route   GET api/posts
//@Desc    route
//@access public
router.get('/', (req, res) => {
    res.send('public route')
})




module.exports = router