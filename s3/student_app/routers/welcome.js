const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Welecome to Our API');
})

module.exports=router