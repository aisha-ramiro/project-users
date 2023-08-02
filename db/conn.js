const { Sequelize } = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
} )

try{
  sequelize.authenticate()
  console.log('Conectamos com sucesso com o Sequelize')

} catch(err){
  console.log("Não foi possível conectar: ", error)
}


module.exports = sequelize

