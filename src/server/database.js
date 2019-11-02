const mongoose = require('mongoose')

export const connect = () => {
  mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))
}
