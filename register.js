
//connect db using sequalize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://localhost:3306/test1', {
username: 'root'
})
    
     //create method 
    var userr = sequelize.define('user',{
        user_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING})
sequelize
.sync({
    force: true
})
.then(function(){
    userr.create({
        user_id: 3,
        name: 'abu',
        address: 'selangor',
        email: 'abu@gmail.com',
        password: 'abu12345'
    })
})

