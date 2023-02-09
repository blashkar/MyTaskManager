const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'must provide task name'],
    trim: true,
    maxLength: [25, 'task name can not be more than 25 character'],
  },
  completed: {
    type: 'boolean',
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
