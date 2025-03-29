
const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const { getReplies, addReply } = require('../controllers/replyController')
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getTasks).post(protect, addTask);
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask);
router.route('/:id/reply').get(protect, getReplies).post(protect, addReply);
module.exports = router;
