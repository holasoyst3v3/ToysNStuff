const sequelize = require('./sequelize')

const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connecting...... DB Connection Established.")
  } catch (error) {
    console.error("Connecting...... DB Connection Failed.")
  }
}

module.exports = connect