var express = require('express');
var router = express.Router();

//connect db using sequalize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://localhost:3306/test1', {
  username: 'root'
})


//REGISTER
router.post('/api/signUp', async (req, res, next) => {

  await sequelize.query(`insert into user (name,address,email,password) values (:name,:address,:email,:password)`, {

    replacements: {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password
    },
    type: sequelize.QueryTypes.INSERT
  }).then(e => e[0])
    .then(async e => {
      if (!e) {
        next("No user added")
      } else {
        return await sequelize.query(`select * from user where user_id = :id`, {
          replacements: {
            id: e
          },
          type: sequelize.QueryTypes.SELECT
        })
      }
    })
    .then(res.json)
    .catch((e) => res.json(e))
})

module.exports = router

