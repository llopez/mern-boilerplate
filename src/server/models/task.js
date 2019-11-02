const mongoose = require('mongoose')

export const Task = mongoose.model('Task', {
  title: String
})
