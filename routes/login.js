var express = require('express');
var router = express.Router();
const db = require('../database/db');


//connect db using sequalize
 const Sequelize = require('sequelize')
 const sequelize = new Sequelize('mysql://localhost:3306/test1', {
 username: 'root'
 })

router.get('/api/user', async (req, res, next) => {
  try{
    console.log("Find user");
  let profile = await sequelize.query('select * from user', {
    replacements: {
      name: req.body.name,
      password: req.body.password
    }, type: sequelize.QueryTypes.SELECT
});
        res.json(profile);
    }
    catch (e){
        console.error('some error here?',e);
        next(generateErrorResponse(ex));
    }
});




//     let user = await sequelize.'select * from user where name = :name and password = :password', { 
//     replacements: {
//       name: req.body.name,
//       password: req.body.password
//     },
//     type: sequelize.QueryTypes.SELECT
//   }).then(e => e[0])
//     .then(e => {
//       if (!e) {
//         next("No User Found")
//       } else {
//         res.json(e)
//       }
//     })
//     .then(console.log)
// })

module.exports = router
