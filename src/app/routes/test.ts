const express = require('express');
const router = express.Router();
router.get('/test/route1' , (req:any, res:any) => {
	res.send('test/route1 is working');
})
module.exports = router;