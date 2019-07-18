const Sequelize = require("sequelize")
const db = {}
module.exports = new Sequelize('mysql://localhost:3306/test1', { username: 'root'})

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db 

// const Sequelize = require("sequelize");
// module.exports = new Sequelize('mysql://localhost:3306/test1', { username: 'root'});
 