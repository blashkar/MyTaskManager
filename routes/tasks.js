const express = require('express');
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  editTask,
} = require('../contorllers/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router
  .route('/:id')
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
