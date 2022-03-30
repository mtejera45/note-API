const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

mongoose.connect(connectionString)
  .then(() => {
    console.log('Data Based Connected')
  }).catch(err => {
    console.error(err)
  })

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
