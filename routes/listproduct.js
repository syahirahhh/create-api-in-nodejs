var express = require('express');
var router = express.Router();


//connect db using sequalize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://localhost:3306/test1', {
username: 'root'
})

router.get('/api/listproduct', async (req, res, next) => {
  
  await sequelize.query('select * from products where product_name = :product_name and product_description = :product_description', { 
    replacements: {
      product_name: req.body.product_name,
      product_description: req.body.product_description
    },
    type: sequelize.QueryTypes.SELECT
  }).then(e => e[0])
    .then(e => {
      if (!e) {
        next("No Products Found")
      } else {
        var output = {
          productName: e['product_name'],
          image: 'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg'
        }
      }
     res.json(output);
    })
    .catch(e => {
      console.log(e)
      res.json(e)
    })
    
})

module.exports = router
