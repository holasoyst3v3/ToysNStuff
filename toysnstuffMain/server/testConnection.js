const sequelize = require('./database/sequelize')

module.exports = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log("Connecting...... DB Connection Established.");
    } catch (error) {
      console.error("Connecting...... DB Connection Failed:", error);
    }
  }
}