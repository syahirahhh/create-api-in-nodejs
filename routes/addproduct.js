var express = require('express');
var router = express.Router();

//connect db using sequalize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://localhost:3306/test1', {
username: 'root'
})


//REGISTER
router.post('/api/addproduct', async (req, res, next) => {
    
    await sequelize.query(`insert into products (product_name,product_description,pictures) values (:product_name,:product_description,:pictures)`, {
    
    replacements: {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        pictures: req.body.pictures
        
    },
    type: sequelize.QueryTypes.INSERT
}).then(e => e[0])
.then(e => {
  if (!e) {
    next("No product added")
  } else {
    res.json(e)
  }
})
.then(console.log)
})

module.exports = router

